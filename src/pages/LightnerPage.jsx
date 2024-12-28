// src/pages/LightnerPage.js
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { doc, setDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import { words } from '../data/words'

function LightnerPage({ currentUser }) {
  const [leitnerBoxes, setLeitnerBoxes] = useState({})
  const [showResetModal, setShowResetModal] = useState(false)
  const [loadingData, setLoadingData] = useState(true)

  const boxes = [1, 2, 3, 4, 5]

  // --- HELPER: load from localStorage (for fallback) ---
  function loadFromLocal() {
    const stored = localStorage.getItem('leitnerBoxes')
    if (stored) {
      return JSON.parse(stored)
    } else {
      const init = {}
      words.forEach(word => { init[word.id] = 1 })
      return init
    }
  }

  // --- On mount, set up Firestore real-time listener if logged in, else local storage
  useEffect(() => {
    if (!currentUser) {
      // Not logged in => local only
      setLeitnerBoxes(loadFromLocal())
      setLoadingData(false)
      return
    }

    const ref = doc(db, 'users', currentUser.uid)
    const unsubscribe = onSnapshot(ref, snapshot => {
      if (snapshot.exists()) {
        // Merge with local to avoid overwriting if offline changes
        const serverData = snapshot.data().leitnerBoxes || {}
        setLeitnerBoxes(serverData)
      } else {
        // If no doc, create a default
        const init = {}
        words.forEach(word => { init[word.id] = 1 })
        setDoc(ref, { leitnerBoxes: init }, { merge: true })
        setLeitnerBoxes(init)
      }
      setLoadingData(false)
    }, err => {
      console.warn('onSnapshot failed, fallback to localStorage:', err)
      setLeitnerBoxes(loadFromLocal())
      setLoadingData(false)
    })

    return () => unsubscribe()
  }, [currentUser])

  // --- Whenever leitnerBoxes changes, update localStorage and Firestore
  useEffect(() => {
    if (loadingData) return
    if (!Object.keys(leitnerBoxes).length) return

    // Save to local storage
    localStorage.setItem('leitnerBoxes', JSON.stringify(leitnerBoxes))

    // If logged in, also save to Firestore
    if (currentUser) {
      const ref = doc(db, 'users', currentUser.uid)
      setDoc(ref, { leitnerBoxes }, { merge: true })
        .catch(err => console.error('Error saving to Firestore:', err))
    }
  }, [leitnerBoxes, currentUser, loadingData])

  // -------------- BOX / PROGRESS LOGIC --------------
  const getCountForBox = (boxNumber) => {
    let count = 0
    for (let wordId in leitnerBoxes) {
      if (leitnerBoxes[wordId] === boxNumber) {
        count++
      }
    }
    return count
  }

  const getBoxStatus = (box, count) => {
    if (count === 0) return 'empty'
    const today = new Date()
    const lastReview = localStorage.getItem(`lastReview_box_${box}`) || '2000-01-01'
    const daysSinceReview = Math.floor((today - new Date(lastReview)) / (1000 * 60 * 60 * 24))
    return daysSinceReview >= box ? 'due' : 'reviewed'
  }

  // -------------- RESET LOGIC --------------
  const handleReset = () => {
    const init = {}
    words.forEach(word => {
      init[word.id] = 1
    })
    setLeitnerBoxes(init)

    // Clear lastReview
    boxes.forEach(box => localStorage.removeItem(`lastReview_box_${box}`))

    setShowResetModal(false)
  }

  if (loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading Boxes...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header with Reset Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Your Learning
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-lime-600 ml-3">
                Progress
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
              Track your journey through the Leitner system. Master words at your own pace.
            </p>
          </div>
          
          <button
            onClick={() => setShowResetModal(true)}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl 
              text-gray-700 bg-white hover:text-gray-900 border border-gray-200 
              shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <svg 
              className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" 
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
            Reset All Progress
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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
                <div className={`
                  absolute -inset-0.5 rounded-lg bg-gradient-to-r 
                  ${status === 'due' 
                    ? 'from-blue-400 to-blue-500 animate-pulse' 
                    : status === 'reviewed' 
                      ? 'from-lime-400 to-lime-500'
                      : 'from-gray-200 to-gray-300'
                  }
                  opacity-75 group-hover:opacity-100 transition duration-300 -z-10
                `} />
                
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

        {/* Learning Tips */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <span className="font-semibold text-gray-700">Daily Practice</span>
              </div>
              <p className="text-gray-600">Focus on Box 1 words daily to build your foundation</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <span className="font-semibold text-gray-700">Progress Track</span>
              </div>
              <p className="text-gray-600">Words move up as you master them, ensuring efficient learning</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <span className="font-semibold text-gray-700">Spaced Review</span>
              </div>
              <p className="text-gray-600">Higher boxes need less frequent review, optimizing your time</p>
            </div>
          </div>
        </div>

        {/* Reset Confirmation Modal */}
        {showResetModal && (
          <div
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowResetModal(false)}
          >
            <div 
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl transform transition-all duration-300 scale-100 opacity-100"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 text-center">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg 
                    className="w-8 h-8 text-gray-600" 
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Reset All Progress?</h3>
                <p className="text-gray-600">
                  This will move all words back to Box 1 and reset your review history. 
                  This action cannot be undone.
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowResetModal(false)}
                  className="flex-1 px-4 py-3 text-sm font-medium rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 px-4 py-3 text-sm font-medium rounded-xl text-white bg-gradient-to-r 
                             from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 
                             transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
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
