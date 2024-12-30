// src/pages/LeitnerPage.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { words } from '../data/words'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import LoadingState from '../components/LoadingState'
import { wordSets } from '../data/words'

// (NEW) import the AchievementsGallery
import AchievementsGallery from '../components/AchievementsGallery'

function LeitnerPage({ currentUser }) {
  const [leitnerBoxes, setLeitnerBoxes] = useState({})
  const [showResetModal, setShowResetModal] = useState(false)
  const [loadingData, setLoadingData] = useState(true)
  const [firstName, setFirstName] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  // We'll also track totalTimeSpent + streak
  const [totalTimeSpent, setTotalTimeSpent] = useState(0) // in seconds
  const [streak, setStreak] = useState(0)

  // (NEW) We'll store achievements object from user doc if it exists
  const [achievementsMap, setAchievementsMap] = useState({})

  const boxes = [1, 2, 3, 4, 5]

  function loadFromLocal() {
    const stored = localStorage.getItem('leitnerBoxes')
    if (stored) return JSON.parse(stored)
    const init = {}
    wordSets.french.words.forEach(word => {
      init[word.id] = 1
    })
    return init
  }

  useEffect(() => {
    async function fetchData() {
      if (!currentUser) {
        setLeitnerBoxes(loadFromLocal())
        setLoadingData(false)
        return
      }
      const userDocRef = doc(db, 'users', currentUser.uid)
      const snap = await getDoc(userDocRef).catch(() => null)

      if (snap && snap.exists()) {
        const data = snap.data()
        setLeitnerBoxes(data.leitnerBoxes || {})
        setFirstName(data.firstName || '')
        setIsAdmin(data.isAdmin || false)
        setTotalTimeSpent(data.totalTimeSpent || 0)
        setStreak(data.streak || 0)

        // (NEW) store achievements if present
        setAchievementsMap(data.achievements || {})
      } else {
        // create default if doc doesn't exist
        const init = {}
        wordSets.french.words.forEach(word => {
          init[word.id] = 1
        })
        await setDoc(userDocRef, { leitnerBoxes: init }, { merge: true })
        setLeitnerBoxes(init)
      }
      setLoadingData(false)
    }
    fetchData()
  }, [currentUser])

  useEffect(() => {
    if (loadingData) return
    if (!Object.keys(leitnerBoxes).length) return

    // local
    localStorage.setItem('leitnerBoxes', JSON.stringify(leitnerBoxes))

    // Firestore merge
    if (currentUser) {
      const userDocRef = doc(db, 'users', currentUser.uid)
      setDoc(userDocRef, { leitnerBoxes }, { merge: true }).catch(e =>
        console.error('Saving to Firestore failed:', e)
      )
    }
  }, [leitnerBoxes, currentUser, loadingData])

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

  const handleReset = async () => {
    const init = {}
    wordSets.french.words.forEach(word => {
      init[word.id] = 1
    })
    setLeitnerBoxes(init)

    boxes.forEach(box => {
      localStorage.removeItem(`lastReview_box_${box}`)
    })
    localStorage.setItem('leitnerBoxes', JSON.stringify(init))

    if (currentUser) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid)
        await setDoc(userDocRef, { leitnerBoxes: init }, { merge: true })
      } catch (err) {
        console.error('Failed to reset progress in Firestore:', err)
      }
    }
    setShowResetModal(false)
  }

  // Helper to format time
  const formatTimeSpent = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours > 0) {
      return {
        primary: hours,
        secondary: minutes,
        primaryUnit: 'hour',
        secondaryUnit: 'min'
      }
    } else {
      return {
        primary: minutes,
        secondary: seconds % 60,
        primaryUnit: 'min',
        secondaryUnit: 'sec'
      }
    }
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

  // (NEW) We'll compute wordsMastered quickly if we want to pass it for achievements:
  const wordsMastered = Object.values(leitnerBoxes).filter(b => b === 5).length

  // (NEW) Build a userData object to pass to AchievementsGallery
  const userData = {
    totalTimeSpent,
    streak,
    leitnerBoxes,
    achievements: achievementsMap,
    wordsMastered, 
    // If you want to store lastStudyHour or inactiveDays, you can add them here too
    // lastStudyHour: ...
    // inactiveDays: ...
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50">
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Enhanced Profile Section */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute inset-0 h-32 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl -z-10 opacity-10" />
            
            <div className="pt-8 px-8">
              {/* Profile Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  {firstName ? firstName[0].toUpperCase() : currentUser?.email[0].toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {firstName ? `${firstName}'s Dashboard` : 'Your Dashboard'}
                    </h1>
                    {isAdmin && (
                      <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                        Admin
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 
                           2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    {currentUser?.email}
                  </p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 
                             01-2 2H5a2 2 0 
                             01-2-2v-6a2 2 0 
                             012-2m14 0V9a2 
                             2 0 00-2-2M5 
                             11V9a2 2 0 
                             012-2m0 0V5a2 
                             2 0 012-2h6a2 
                             2 0 012 2v2M7 7h10"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Current Streak</div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-semibold text-gray-900">{streak}</span>
                        <span className="text-sm text-gray-500">days</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-lime-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 8v4l3 3m6-3a9 9 0 
                             11-18 0 9 9 0 
                             0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Total Study Time</div>
                      <div className="flex items-baseline gap-1">
                        {(() => {
                          const time = formatTimeSpent(totalTimeSpent)
                          return (
                            <>
                              <span className="text-xl font-semibold text-gray-900">{time.primary}</span>
                              <span className="text-sm text-gray-500">{time.primaryUnit}</span>
                              {time.secondary > 0 && (
                                <>
                                  <span className="text-xl font-semibold text-gray-900 ml-2">{time.secondary}</span>
                                  <span className="text-sm text-gray-500">{time.secondaryUnit}</span>
                                </>
                              )}
                            </>
                          )
                        })()}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Admin Actions */}
                {isAdmin && (
                  <div className="md:col-span-2 mt-4">
                    <Link
                      to="/admin/flags"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 21v-4m0 0V5a2 
                             2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 
                             2 0 00-2 2zm9-13.5V9"/>
                      </svg>
                      View Flagged Cards
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course Header with Reset Button */}
                {/* Course Progress Section */}
                <div className="mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Learning Progress
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
              {wordSets.french.icon()}
              <span className="font-medium text-gray-700 text-xs sm:text-base">
                {wordSets.french.name}
              </span>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm hidden sm:block">
              {wordSets.french.description}
            </p>
          </div>

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
                d="M4 4v5h.582m15.356 
                   2A8.001 8.001 0 
                   004.582 9m0 
                   0H9m11 
                   11v-5h-.581m0 
                   0a8.003 8.003 
                   0 01-15.357-2m15.357 
                   2H15"
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

        {/* Leitner Boxes */}
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
                        font-extrabold
                        ${count >= 1000 ? 'text-3xl' : 'text-4xl'}
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

        {/* (NEW) Achievements Section */}
        <AchievementsGallery user={userData} />

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
                      d="M12 9v2m0 
                         4h.01m-6.938 
                         4h13.856c1.54 
                         0 2.502-1.667 
                         1.732-3L13.732 
                         4c-.77-1.333-2.694-1.333-3.464 
                         0L3.34 16c-.77 
                         1.333.192 3 
                         1.732 3z"
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
                  className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl text-white bg-gradient-to-r 
                             from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-200 
                             transform hover:-translate-y-0.5 hover:shadow-lg"
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

export default LeitnerPage
