// src/pages/LightnerPage.js
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { words } from '../data/words'

function LightnerPage({ currentUser }) {
  const [leitnerBoxes, setLeitnerBoxes] = useState({})
  const [showResetModal, setShowResetModal] = useState(false)
  const [loadingData, setLoadingData] = useState(true)

  const boxes = [1, 2, 3, 4, 5]

  // Fallback: load from localStorage
  function loadFromLocal() {
    const stored = localStorage.getItem('leitnerBoxes')
    if (stored) return JSON.parse(stored)
    const init = {}
    words.forEach((w) => { init[w.id] = 1 })
    return init
  }

  useEffect(() => {
    if (!currentUser) {
      // If not logged in => local only
      setLeitnerBoxes(loadFromLocal())
      setLoadingData(false)
      return
    }

    // If logged in => Firestore
    const ref = doc(db, 'users', currentUser.uid)
    const unsubscribe = onSnapshot(ref, snapshot => {
      if (snapshot.exists()) {
        // If doc found, set state
        const data = snapshot.data()
        setLeitnerBoxes(data.leitnerBoxes || {})
      } else {
        // If no doc, create default
        const init = {}
        words.forEach((w) => { init[w.id] = 1 })
        setDoc(ref, { leitnerBoxes: init })
        setLeitnerBoxes(init)
      }
      setLoadingData(false)
    }, (err) => {
      console.warn('onSnapshot error in LightnerPage, fallback local:', err)
      setLeitnerBoxes(loadFromLocal())
      setLoadingData(false)
    })

    return () => unsubscribe()
  }, [currentUser])

  // Whenever leitnerBoxes changes, we store it locally & Firestore
  useEffect(() => {
    if (loadingData) return
    if (!Object.keys(leitnerBoxes).length) return

    // Save to localStorage
    localStorage.setItem('leitnerBoxes', JSON.stringify(leitnerBoxes))

    // Also to Firestore if logged in
    if (currentUser) {
      const ref = doc(db, 'users', currentUser.uid)
      setDoc(ref, { leitnerBoxes }, { merge: true })
        .catch(e => console.error('Error saving to Firestore:', e))
    }
  }, [leitnerBoxes, currentUser, loadingData])

  // Helper to count words in a box
  const getCountForBox = (boxNumber) => {
    let count = 0
    for (const wordId in leitnerBoxes) {
      if (leitnerBoxes[wordId] === boxNumber) count++
    }
    return count
  }

  // Determine if a box is empty / due / reviewed
  const getBoxStatus = (box, count) => {
    if (count === 0) return 'empty'
    const today = new Date()
    const lastReview = localStorage.getItem(`lastReview_box_${box}`) || '2000-01-01'
    const daysSinceReview = Math.floor((today - new Date(lastReview)) / (1000*60*60*24))
    return daysSinceReview >= box ? 'due' : 'reviewed'
  }

  // Reset all progress => all to box 1
  const handleReset = () => {
    const init = {}
    words.forEach(word => {
      init[word.id] = 1
    })
    setLeitnerBoxes(init)
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
            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Reset Progress
          </button>
        </div>

        {/* Summary Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                {words.length}
              </div>
              <div className="text-sm text-gray-500">Total Words</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-800">
                {getCountForBox(5)}
              </div>
              <div className="text-sm text-gray-500">Mastered</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                {getCountForBox(1)}
              </div>
              <div className="text-sm text-gray-500">To Review</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-600 to-lime-800">
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
          {boxes.map(box => {
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
                    opacity-75 group-hover:opacity-100 transition duration-300 -z-10
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
                  {/* Optional progress bar, etc. */}
                </div>
              </Link>
            )
          })}
        </div>

        {/* The learning strategy, etc. same as your code */}
        {/* ... */}
        
        {/* Reset Modal */}
        {showResetModal && (
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reset Progress?</h3>
              <p className="text-gray-600 mb-8">
                This will move all words back to Box 1 and reset your review history. 
                This action cannot be undone.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowResetModal(false)}
                  className="flex-1 px-4 py-2 text-sm font-medium rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
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
