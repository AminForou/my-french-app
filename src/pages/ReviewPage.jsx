// src/pages/ReviewPage.jsx
import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { doc, onSnapshot, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { words } from '../data/words'
import Card from '../components/Card'
import LoadingState from '../components/LoadingState'
import { wordSets } from '../data/words'
import { playSuccess } from '../utils/sounds'

import LanguageSelector from '../components/LanguageSelector'
import CardStackSelector from '../components/CardStackSelector'

function ReviewPage({ currentUser }) {
  const { boxId = '1' } = useParams()
  const boxNumber = parseInt(boxId, 10) || 1

  // Leitner boxes
  const [leitnerBoxes, setLeitnerBoxes] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loadingData, setLoadingData] = useState(true)

  // Language, session size
  const [languageMode, setLanguageMode] = useState('en')
  const [sessionSize, setSessionSize] = useState(15)

  // Track session time
  // We'll store sessionStart in a REF so it doesn't get overwritten by re-renders:
  const sessionStartRef = useRef(null)

  // Track if we've updated stats so we don't double count
  const [statsUpdated, setStatsUpdated] = useState(false)

  // Add firstName state
  const [firstName, setFirstName] = useState('')

  // Load local fallback
  function loadFromLocal() {
    const stored = localStorage.getItem('leitnerBoxes')
    if (stored) return JSON.parse(stored)
    const init = {}
    words.forEach((w) => {
      init[w.id] = 1
    })
    return init
  }

  // 1) On mount, set up onSnapshot if logged in
  useEffect(() => {
    // If no user => fallback
    if (!currentUser) {
      setLeitnerBoxes(loadFromLocal())
      setLoadingData(false)
      // Initialize sessionStart only once
      sessionStartRef.current = Date.now()
      return
    }

    const userRef = doc(db, 'users', currentUser.uid)
    const unsub = onSnapshot(
      userRef,
      (snap) => {
        if (snap.exists()) {
          setLeitnerBoxes(snap.data().leitnerBoxes || {})
        } else {
          // doc not found => create default
          const init = {}
          words.forEach((w) => {
            init[w.id] = 1
          })
          setDoc(userRef, { leitnerBoxes: init }, { merge: true })
          setLeitnerBoxes(init)
        }
        setLoadingData(false)

        // Set sessionStart **once** if not set
        if (!sessionStartRef.current) {
          sessionStartRef.current = Date.now()
        }
      },
      (err) => {
        console.warn('onSnapshot error in ReviewPage, fallback local:', err)
        setLeitnerBoxes(loadFromLocal())
        setLoadingData(false)
        if (!sessionStartRef.current) {
          sessionStartRef.current = Date.now()
        }
      }
    )

    return () => {
      // NO finalizeStats here => we will finalize only on session completion or if you want on route change
      unsub()
    }
  }, [currentUser])

  // 2) Whenever leitnerBoxes changes, save locally + Firestore (except while loading)
  useEffect(() => {
    if (loadingData) return
    if (!Object.keys(leitnerBoxes).length) return

    localStorage.setItem('leitnerBoxes', JSON.stringify(leitnerBoxes))

    if (currentUser) {
      const userRef = doc(db, 'users', currentUser.uid)
      setDoc(userRef, { leitnerBoxes }, { merge: true }).catch((e) =>
        console.error('Saving to Firestore failed:', e)
      )
    }
  }, [leitnerBoxes, currentUser, loadingData])

  // 3) finalizeStats called only once, at session completion (or possibly route change)
  const finalizeStats = async () => {
    if (!currentUser) return
    if (statsUpdated) return // in case it's called twice

    setStatsUpdated(true)

    const endTime = Date.now()
    const elapsedSecs = Math.floor((endTime - (sessionStartRef.current || endTime)) / 1000)
    // If for some reason sessionStartRef was never set, fallback to 0.

    try {
      const userRef = doc(db, 'users', currentUser.uid)
      const snap = await getDoc(userRef)
      if (!snap.exists()) return

      let { totalTimeSpent = 0, lastStudyDate = '', streak = 0 } = snap.data()

      // Add new elapsed time
      totalTimeSpent += elapsedSecs

      // Check streak
      const todayStr = new Date().toDateString() // e.g. "Mon Feb 06 2023"
      const last = new Date(lastStudyDate)
      const lastStr = last.toDateString()
      const nowMid = new Date(todayStr) // midnight
      const lastMid = new Date(lastStr)
      const oneDay = 1000 * 60 * 60 * 24
      const diffDays = Math.floor((nowMid - lastMid) / oneDay)

      if (diffDays === 1) {
        streak += 1
      } else if (diffDays > 1 || diffDays < 0) {
        streak = 1
      }
      // if diffDays === 0 => same day => do nothing

      lastStudyDate = todayStr

      await setDoc(
        userRef,
        {
          totalTimeSpent,
          lastStudyDate,
          streak
        },
        { merge: true }
      )
      console.log(`finalizeStats: +${elapsedSecs}s, totalTimeSpent => ${totalTimeSpent}`)
    } catch (err) {
      console.error('finalizeStats error:', err)
    }
  }

  // 4) Gather words from this box
  const boxWords = words.filter((w) => leitnerBoxes[w.id] === boxNumber)
  const maxSessionPossible = Math.min(40, boxWords.length)
  const sessionWords = boxWords.slice(0, sessionSize)

  // Handler for slider
  const handleSessionSizeChange = (e) => {
    setSessionSize(parseInt(e.target.value, 10))
  }

  // Move to next card
  const moveToNextCard = () => setCurrentIndex((prev) => prev + 1)

  // Box movement
  const moveToNextBox = (wordId) => {
    setLeitnerBoxes((prev) => {
      const currentBox = prev[wordId]
      const nextBox = currentBox < 5 ? currentBox + 1 : 5
      return { ...prev, [wordId]: nextBox }
    })
  }

  const moveToBoxOne = (wordId) => {
    setLeitnerBoxes((prev) => ({ ...prev, [wordId]: 1 }))
  }

  // Language
  const handleLanguageChange = (mode) => {
    setLanguageMode(mode)
  }

  // Add useEffect to fetch user data
  useEffect(() => {
    async function fetchUserData() {
      if (!currentUser) return
      
      try {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
        if (userDoc.exists()) {
          setFirstName(userDoc.data().firstName || '')
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }

    fetchUserData()
  }, [currentUser])

  if (loadingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 pt-32 px-4">
        <LoadingState type="cards" />
      </div>
    )
  }

  if (sessionWords.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Box {boxNumber} is Empty</h2>
            <p className="text-gray-600 mb-8">
              Great job! You've completed all the words in this box for now. Come back later or try another box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/progress"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl 
                           text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                           transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Return to Boxes
              </Link>
              {boxNumber < 5 && (
                <Link
                  to={`/review/${boxNumber + 1}`}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl 
                             text-blue-700 bg-blue-50 hover:bg-blue-100 transform transition-all duration-300 
                             hover:-translate-y-0.5"
                >
                  Try Box {boxNumber + 1}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // If done with all sessionWords
  if (currentIndex >= sessionWords.length) {
    // finalize once
    if (!statsUpdated && currentUser && sessionStartRef.current) {
      finalizeStats()
      playSuccess() // Play success sound when session completes
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 
                   11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Session Complete!
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-gray-600">
              You've reviewed {sessionWords.length} word
              {sessionWords.length > 1 ? 's' : ''} in Box {boxNumber}.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="bg-blue-50 rounded-lg px-4 py-2">
                <div className="font-semibold text-blue-700">Box {boxNumber}</div>
                <div className="text-blue-600">{sessionWords.length} Words</div>
              </div>
              <div className="bg-lime-50 rounded-lg px-4 py-2">
                <div className="font-semibold text-lime-700">Complete</div>
                <div className="text-lime-600">100%</div>
              </div>
            </div>
          </div>
          <Link
            to="/progress"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl 
                       text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                       transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Return to Boxes
          </Link>
        </div>
      </div>
    )
  }

  // Otherwise, still reviewing
  const currentWordData = sessionWords[currentIndex]
  const currentCardNumber = currentIndex + 1
  const totalCards = sessionWords.length
  const progressPercentage = (currentCardNumber / totalCards) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 pt-32 px-4 sm:pt-32 pt-24">
      <div className="max-w-4xl mx-auto pb-32 sm:pb-32 pb-16">
        {/* Box Info */}
        <div className="text-center mb-4 sm:mb-8">
          <div
            className="inline-flex items-center justify-center gap-2 bg-white rounded-full px-4 py-1.5 
                       shadow-sm border border-gray-100 mb-2 sm:mb-4"
          >
            {wordSets.french.icon()}
            <span className="text-sm font-medium text-gray-700">
              {wordSets.french.name}
            </span>
          </div>
        </div>

        {/* Session Header */}
        <div className="text-center mb-8 sm:mb-8 mb-4">
          <div
            className="hidden sm:inline-flex items-center justify-center gap-2 bg-white rounded-full px-4 py-1 
                       shadow-sm border border-gray-100 mb-4 sm:mb-4 mb-2"
          >
            <span className="text-sm font-medium text-gray-600">Box</span>
            <span className="text-sm font-bold text-blue-600">
              {boxNumber}
            </span>
          </div>
          <h1 className="text-3xl sm:text-3xl text-2xl font-bold text-gray-900 mb-2">
            Review Session
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Swipe right if you know it, left if you need more practice
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 sm:p-6 p-4 shadow-lg border border-gray-100 mb-8 sm:mb-8 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-bold text-gray-900">
              {currentCardNumber} of {totalCards}
            </span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-lime-500 transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
            <span>Start</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
        </div>

        {/* Card Container */}
        <div className="relative px-0 sm:px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent pointer-events-none" />
          <Card
            wordData={currentWordData}
            boxNumber={leitnerBoxes[currentWordData.id]}
            moveToNextBox={moveToNextBox}
            moveToBoxOne={moveToBoxOne}
            goToNextCard={moveToNextCard}
            languageMode={languageMode}
            currentUser={currentUser}
            firstName={firstName}
          />
        </div>

        {/* Controls section */}
        <div className="mt-8 space-y-8">
          <LanguageSelector onChange={handleLanguageChange} value={languageMode} />

          <CardStackSelector
            value={sessionSize}
            onChange={(e) => setSessionSize(parseInt(e.target.value, 10))}
            max={maxSessionPossible}
          />
        </div>
      </div>
    </div>
  )
}

export default ReviewPage
