// src/pages/LeitnerPage.jsx

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import LoadingState from '../components/LoadingState'
import { wordSets, words as allWords } from '../data/words'

// (NEW) import the AchievementsGallery
import AchievementsGallery from '../components/AchievementsGallery'

function LeitnerPage({ currentUser }) {
  const [leitnerBoxes, setLeitnerBoxes] = useState({})
  const [leitnerPositions, setLeitnerPositions] = useState({})
  const [showResetModal, setShowResetModal] = useState(false)
  const [loadingData, setLoadingData] = useState(true)
  const [firstName, setFirstName] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  // We'll also track totalTimeSpent + streak
  const [totalTimeSpent, setTotalTimeSpent] = useState(0)
  const [streak, setStreak] = useState(0)

  // We'll store achievements object from user doc if it exists
  const [achievementsMap, setAchievementsMap] = useState({})

  // (NEW) track how many words are “active”
  const [activeSet, setActiveSet] = useState(100) // default to 100 if not found in Firestore

  const boxes = [1, 2, 3, 4, 5]

  // define getBoxStatus
  const getBoxStatus = (boxNumber, count) => {
    if (count === 0) return 'empty'
    const today = new Date()
    const lastReview = localStorage.getItem(`lastReview_box_${boxNumber}`) || '2000-01-01'
    const daysSinceReview = Math.floor(
      (today - new Date(lastReview)) / (1000 * 60 * 60 * 24)
    )
    return daysSinceReview >= boxNumber ? 'due' : 'reviewed'
  }

  // If user is not logged in => local fallback
  function loadFromLocal() {
    const stored = localStorage.getItem('leitnerBoxes')
    if (stored) return JSON.parse(stored)
    // default to first 100
    const init = {}
    allWords.slice(0, 100).forEach(word => {
      init[word.id] = 1
    })
    return init
  }

  useEffect(() => {
    async function fetchData() {
      if (!currentUser) {
        setLeitnerBoxes(loadFromLocal())
        setLeitnerPositions({})
        setLoadingData(false)
        return
      }
      const userDocRef = doc(db, 'users', currentUser.uid)
      const snap = await getDoc(userDocRef).catch(() => null)

      if (snap && snap.exists()) {
        const data = snap.data()
        setLeitnerBoxes(data.leitnerBoxes || {})
        setLeitnerPositions(data.leitnerPositions || {})
        setFirstName(data.firstName || '')
        setIsAdmin(data.isAdmin || false)
        setTotalTimeSpent(data.totalTimeSpent || 0)
        setStreak(data.streak || 0)
        setAchievementsMap(data.achievements || {})
        setActiveSet(data.activeSet || 100)
      } else {
        // create default if doc doesn't exist
        const init = {}
        allWords.slice(0, 100).forEach(word => {
          init[word.id] = 1
        })
        const initPos = {}
        allWords.slice(0, 100).forEach((w, i) => {
          initPos[w.id] = i
        })

        await setDoc(
          userDocRef, 
          { 
            leitnerBoxes: init,
            leitnerPositions: initPos,
            activeSet: 100,
          }, 
          { merge: true }
        )
        setLeitnerBoxes(init)
        setLeitnerPositions(initPos)
        setActiveSet(100)
      }
      setLoadingData(false)
    }
    fetchData()
  }, [currentUser])

  // Whenever leitnerBoxes changes
  useEffect(() => {
    if (loadingData) return
    if (!Object.keys(leitnerBoxes).length) return

    localStorage.setItem('leitnerBoxes', JSON.stringify(leitnerBoxes))

    if (currentUser) {
      const userDocRef = doc(db, 'users', currentUser.uid)
      setDoc(
        userDocRef, 
        { 
          leitnerBoxes,
          leitnerPositions,
          activeSet
        }, 
        { merge: true }
      ).catch(e => console.error('Saving to Firestore failed:', e))
    }
  }, [leitnerBoxes, leitnerPositions, activeSet, currentUser, loadingData])

  // Helper to format time
  function formatTimeSpent(seconds) {
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

  // Auto-check the 80% rule
  useEffect(() => {
    if (loadingData) return
    if (!activeSet) return
    // total active = activeSet
    // how many of those are still in box 1?
    const activeWordIds = allWords.slice(0, activeSet).map(w => w.id)
    const inBox1Count = activeWordIds.filter(id => leitnerBoxes[id] === 1).length
    const progressedCount = activeSet - inBox1Count
    const ratio = progressedCount / activeSet
    if (ratio >= 0.8 && activeSet < 1000) {
      // auto add next batch of 100
      const newActive = Math.min(activeSet + 100, 1000)
      console.log(`Auto-introducing next batch. newActive = ${newActive}`)
      // For each newly introduced card, set box=1 if not present
      allWords.slice(activeSet, newActive).forEach((w, i) => {
        if (!(w.id in leitnerBoxes)) {
          leitnerBoxes[w.id] = 1
          leitnerPositions[w.id] = Date.now() + i
        }
      })
      setLeitnerBoxes({ ...leitnerBoxes })
      setLeitnerPositions({ ...leitnerPositions })
      setActiveSet(newActive)
    }
  // eslint-disable-next-line
  }, [activeSet, leitnerBoxes, leitnerPositions, loadingData])

  // Manual button handle
  const handleAddNextBatch = () => {
    const newActive = Math.min(activeSet + 100, 1000)
    if (newActive === activeSet) return
    allWords.slice(activeSet, newActive).forEach((w, i) => {
      if (!(w.id in leitnerBoxes)) {
        leitnerBoxes[w.id] = 1
        leitnerPositions[w.id] = Date.now() + i
      }
    })
    setLeitnerBoxes({ ...leitnerBoxes })
    setLeitnerPositions({ ...leitnerPositions })
    setActiveSet(newActive)
  }

  const handleReset = async () => {
    const init = {}
    allWords.slice(0, 100).forEach(word => {
      init[word.id] = 1
    })
    const initPos = {}
    allWords.slice(0, 100).forEach((w, i) => {
      initPos[w.id] = i
    })

    setLeitnerBoxes(init)
    setLeitnerPositions(initPos)
    setActiveSet(100)

    boxes.forEach(box => {
      localStorage.removeItem(`lastReview_box_${box}`)
    })
    localStorage.setItem('leitnerBoxes', JSON.stringify(init))

    if (currentUser) {
      try {
        const userDocRef = doc(db, 'users', currentUser.uid)
        await setDoc(
          userDocRef, 
          { 
            leitnerBoxes: init,
            leitnerPositions: initPos,
            activeSet: 100
          }, 
          { merge: true }
        )
      } catch (err) {
        console.error('Failed to reset progress in Firestore:', err)
      }
    }
    setShowResetModal(false)
  }

  // We'll compute wordsMastered quickly if we want to pass it for achievements
  const wordsMastered = Object.values(leitnerBoxes).filter(b => b === 5).length
  const userData = {
    totalTimeSpent,
    streak,
    leitnerBoxes,
    leitnerPositions,
    achievements: achievementsMap,
    wordsMastered
  }

  // compute how many are in each box only among activeSet
  const getCountForBox = (boxNumber) => {
    let count = 0
    const activeIds = allWords.slice(0, activeSet).map(w => w.id)
    for (const wid of activeIds) {
      if (leitnerBoxes[wid] === boxNumber) count++
    }
    return count
  }

  // compute “due today”
  const getDueTodayCount = () => {
    let total = 0
    for (let b = 1; b <= 5; b++) {
      const c = getCountForBox(b)
      const st = getBoxStatus(b, c)
      if (st === 'due') {
        total += c
      }
    }
    return total
  }

  // “toReview” is how many are in box #1
  const toReview = getCountForBox(1)

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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 
                           8l7.89 5.26a2 2 
                           0 
                           002.22 0L21 
                           8M5 
                           19h14a2 
                           2 0 
                           002-2V7a2 
                           2 0 
                           00-2-2H5a2 
                           2 0 
                           00-2 2v10a2 
                           2 0 
                           002 2z"
                      />
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 
                             2 0 
                             012 2v6a2 
                             2 0 
                             01-2 2H5a2 
                             2 0 
                             01-2-2v-6a2 
                             2 0 
                             012-2m14 
                             0V9a2 
                             2 0 
                             00-2-2M5 
                             11V9a2 
                             2 0 
                             012-2m0 
                             0V5a2 
                             2 0 
                             012-2h6a2 
                             2 
                             0 
                             012 2v2M7 
                             7h10"
                        />
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 
                             9 0 
                             11-18 0 
                             9 9 0 
                             0118 
                             0z"
                        />
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
                  <div className="md:col-span-2 mt-4 flex gap-3">
                    <Link
                      to="/admin/flags"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                        />
                      </svg>
                      View Flagged Cards
                    </Link>

                    <Link
                      to="/admin/users"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-purple-700 bg-purple-50 hover:bg-purple-100 transition-all duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Manage Users
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Add this before Learning Progress section */}
        <div className="mb-12">
          <Link
            to="/review/1"
            className="group relative block w-full max-w-2xl mx-auto px-8 py-6 rounded-2xl overflow-hidden"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform transition-transform duration-500 group-hover:scale-105" />
            
            {/* Subtle animated pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <pattern id="pattern" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M0 32V16L16 0H32V16L16 32z" fill="white"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#pattern)"/>
              </svg>
            </div>

            {/* Content */}
            <div className="relative flex items-center justify-between text-white">
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Start Learning Session
                </h3>
                <p className="text-blue-100">
                  Review cards and strengthen your knowledge
                </p>
              </div>
              <div className="ml-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm 
                              transform transition-transform duration-500 group-hover:rotate-12">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hover effect light */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 
                            transform translate-x-[-100%] group-hover:translate-x-[100%] 
                            transition-transform duration-1000" />
          </Link>
        </div>

        {/* Course Progress */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Learning Progress
          </h2>

          {/* (NEW) Button to manually add next 100 */}
          {activeSet < 1000 && (
            <button
              onClick={handleAddNextBatch}
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl 
                        text-blue-700 bg-blue-50/80 hover:bg-blue-100 border border-blue-200 
                        shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md 
                        backdrop-blur-sm relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg 
                  className="w-4 h-4 transition-transform group-hover:rotate-12" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Add Next 100 Words
                <span className="px-2 py-0.5 text-xs bg-blue-100 text-blue-800 rounded-full">
                  {activeSet} / 1000
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent 
                              group-hover:translate-x-full transition-transform duration-500"/>
            </button>
          )}
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
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-gray-700 bg-white 
                      hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 group"
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
                d="M4 
                   4v5h.582m15.356 
                   2A8.001 
                   8.001 
                   0 
                   004.582 
                   9m0 
                   0H9m11 
                   11v-5h-.581m0 
                   0a8.003 
                   8.003 
                   0 
                   01-15.357-2m15.357 
                   2H15"
              />
            </svg>
            Reset Progress
          </button>
        </div>

        {/* Summary Stats */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 1) Total Words = 1000 */}
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                1000
              </div>
              <div className="text-sm text-gray-500">Total Words</div>
            </div>

            {/* 2) Mastered among activeSet */}
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-800">
                {
                  Object.entries(leitnerBoxes).filter(([wid, box]) => {
                    const indexInAll = allWords.findIndex(x => x.id === parseInt(wid,10))
                    if (indexInAll < 0) return false
                    return indexInAll < activeSet && box === 5
                  }).length
                }
              </div>
              <div className="text-sm text-gray-500">Mastered</div>
            </div>

            {/* 3) To Review = Box #1 among activeSet */}
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {
                  Object.entries(leitnerBoxes).filter(([wid, box]) => {
                    const indexInAll = allWords.findIndex(x => x.id === parseInt(wid,10))
                    if (indexInAll < 0) return false
                    return indexInAll < activeSet && box === 1
                  }).length
                }
              </div>
              <div className="text-sm text-gray-500">To Review</div>
            </div>

            {/* 5) (NEW) Active Cards */}
            <div className="text-center p-4 md:block">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                {activeSet}
              </div>
              <div className="text-sm text-gray-500">Active Cards</div>
            </div>
          </div>
        </div>

        {/* Leitner Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {boxes.map((box) => {
            // Only count items up to activeSet
            const count = Object.entries(leitnerBoxes).filter(([wid, b]) => {
              const idx = allWords.findIndex(x => x.id === parseInt(wid,10))
              if (idx < 0) return false
              return idx < activeSet && b === box
            }).length

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
                        style={{ width: `${(count / activeSet) * 100}%` }}
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
                          ? 'Click to Review'
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
                      d="M12 
                         9v2m0 
                         4h.01m-6.938 
                         4h13.856c1.54 
                         0 
                         2.502-1.667 
                         1.732-3L13.732 
                         4c-.77-1.333-2.694-1.333-3.464 
                         0L3.34 
                         16c-.77 
                         1.333.192 
                         3 
                         1.732 
                         3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Reset Progress?</h3>
                <p className="text-gray-600">
                  This will move all words back to Box 1 and reset your review history 
                  to only the first 100 words. This action cannot be undone.
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
