// src/pages/LightnerPage.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { words } from '../data/words'
import { doc, getDoc, setDoc } from 'firebase/firestore'  // <-- import Firestore
import { db } from '../firebase'
import LoadingState from '../components/LoadingState'

function LightnerPage({ currentUser }) {
  const [leitnerBoxes, setLeitnerBoxes] = useState({})
  const [showResetModal, setShowResetModal] = useState(false)
  const [loadingData, setLoadingData] = useState(true)

  // We have 5 boxes in our Leitner system
  const boxes = [1, 2, 3, 4, 5]

  // local fallback load
  function loadFromLocal() {
    const stored = localStorage.getItem('leitnerBoxes')
    if (stored) return JSON.parse(stored)
    const init = {}
    words.forEach(word => {
      init[word.id] = 1
    })
    return init
  }

  // On mount, load either from Firestore (if logged in) or local
  useEffect(() => {
    async function fetchData() {
      if (!currentUser) {
        // Not logged in => load from local
        setLeitnerBoxes(loadFromLocal())
        setLoadingData(false)
        return
      }
      // If logged in => try Firestore first
      const userDocRef = doc(db, 'users', currentUser.uid)
      const snap = await getDoc(userDocRef).catch(() => null)

      if (snap && snap.exists()) {
        const data = snap.data()
        setLeitnerBoxes(data.leitnerBoxes || {})
      } else {
        // If doc not found in Firestore, create default
        const init = {}
        words.forEach(word => {
          init[word.id] = 1
        })
        await setDoc(userDocRef, { leitnerBoxes: init }).catch(() => {})
        setLeitnerBoxes(init)
      }
      setLoadingData(false)
    }
    fetchData()
  }, [currentUser])

  // Whenever leitnerBoxes changes, update localStorage and Firestore if logged in
  useEffect(() => {
    if (loadingData) return
    if (!Object.keys(leitnerBoxes).length) return

    // Always store locally
    localStorage.setItem('leitnerBoxes', JSON.stringify(leitnerBoxes))

    // If logged in => merge to Firestore
    if (currentUser) {
      const userDocRef = doc(db, 'users', currentUser.uid)
      setDoc(userDocRef, { leitnerBoxes }, { merge: true }).catch(e =>
        console.error('Saving to Firestore failed:', e)
      )
    }
  }, [leitnerBoxes, currentUser, loadingData])

  // Count how many words are in each box
  const getCountForBox = (boxNumber) => {
    let count = 0
    for (let wordId in leitnerBoxes) {
      if (leitnerBoxes[wordId] === boxNumber) {
        count++
      }
    }
    return count
  }

  // Figure out if a box is "due", "reviewed", or "empty"
  const getBoxStatus = (box, count) => {
    if (count === 0) return 'empty'
    const today = new Date()
    const lastReview = localStorage.getItem(`lastReview_box_${box}`) || '2000-01-01'
    const daysSinceReview = Math.floor((today - new Date(lastReview)) / (1000 * 60 * 60 * 24))
    return daysSinceReview >= box ? 'due' : 'reviewed'
  }

  // Reset progress locally and in Firestore if logged in
  const handleReset = async () => {
    // Initialize everyone to box 1
    const init = {}
    words.forEach(word => {
      init[word.id] = 1
    })
    setLeitnerBoxes(init)

    // Clear last review dates
    boxes.forEach(box => {
      localStorage.removeItem(`lastReview_box_${box}`)
    })

    // Store to local
    localStorage.setItem('leitnerBoxes', JSON.stringify(init))

    // Also overwrite in Firestore if user is logged in
    if (currentUser) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid)
        await setDoc(userDocRef, { leitnerBoxes: init })  // overwrites leitnerBoxes
      } catch (err) {
        console.error('Failed to reset progress in Firestore:', err)
      }
    }

    setShowResetModal(false)
  }

  if (loadingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <LoadingState type="leitner" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50">
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Your Learning
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-lime-600 ml-3">
              Progress
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Track your journey through the Leitner system. Master words at your own pace.
          </p>
        </div>

        {/* Reset Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setShowResetModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 group"
          >
            <svg 
              className="w-4 h-4 text-gray-500 group-hover:text-gray-700 transition-colors"
              fill="none" 
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Reset Progress
          </button>
        </div>

        {/* Summary Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {words.length}
              </div>
              <div className="text-sm text-gray-500">Total Words</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-800">
                {getCountForBox(5)}
              </div>
              <div className="text-sm text-gray-500">Mastered</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {getCountForBox(1)}
              </div>
              <div className="text-sm text-gray-500">To Review</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-800">
                {boxes.reduce((acc, box) => {
                  const status = getBoxStatus(box, getCountForBox(box))
                  return status === 'due' ? acc + getCountForBox(box) : acc
                }, 0)}
              </div>
              <div className="text-sm text-gray-500">Due Today</div>
            </div>
          </div>
        </div>

        {/* Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {boxes.map((box) => {
            const count = getCountForBox(box)
            const status = getBoxStatus(box, count)

            return (
              <Link
                key={box}
                to={count > 0 ? `/review/${box}` : '#'}
                className={`relative group ${
                  count === 0
                    ? 'cursor-not-allowed'
                    : 'transform transition-all duration-300 hover:-translate-y-1'
                }`}
              >
                <div
                  className={`
                    absolute -inset-0.5 rounded-lg bg-gradient-to-r 
                    ${
                      status === 'due'
                        ? 'from-blue-400 to-blue-500 animate-pulse'
                        : status === 'reviewed'
                        ? 'from-lime-400 to-lime-500'
                        : 'from-gray-200 to-gray-300'
                    }
                    opacity-75 group-hover:opacity-100 transition duration-300
                  `}
                />
                <div className="relative bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      Box {box}
                    </span>
                    <span
                      className={`
                        text-4xl font-extrabold
                        ${
                          status === 'due'
                            ? 'text-blue-500'
                            : status === 'reviewed'
                            ? 'text-lime-500'
                            : 'text-gray-400'
                        }
                      `}
                    >
                      {count}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`
                          h-full transition-all duration-500
                          ${
                            status === 'due'
                              ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                              : status === 'reviewed'
                              ? 'bg-gradient-to-r from-lime-400 to-lime-600'
                              : 'bg-gray-300'
                          }
                        `}
                        style={{ width: `${(count / words.length) * 100}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span
                        className={`
                          font-medium
                          ${
                            status === 'due'
                              ? 'text-blue-600'
                              : status === 'reviewed'
                              ? 'text-lime-600'
                              : 'text-gray-400'
                          }
                        `}
                      >
                        {status === 'due'
                          ? 'Review Now'
                          : status === 'reviewed'
                          ? 'Up to Date'
                          : 'Empty Box'}
                      </span>
                      <span className="text-gray-400 text-xs">
                        Review every {box === 1 ? 'day' : `${box} days`}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Learning Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Regular Review</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Review your words daily to maintain progress. Each box has a specific review schedule.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-lime-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Spaced Repetition</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Words move through boxes based on your performance. Master them to reach Box 5!
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-medium text-gray-900">Stay Consistent</h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Regular practice is key. Even a few minutes each day will help you progress.
              </p>
            </div>
          </div>
        </div>

        {/* Reset Confirmation Modal */}
        {showResetModal && (
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto shadow-xl">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Reset Progress?</h3>
                <p className="text-gray-600">
                  This will move all words back to Box 1 and reset your review history. 
                  This action cannot be undone.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowResetModal(false)}
                  className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Yes, Reset Everything
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LightnerPage
