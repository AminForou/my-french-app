// src/pages/ReviewPage.jsx
import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { doc, onSnapshot, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { words as allWords } from '../data/words'
import Card from '../components/Card'
import LoadingState from '../components/LoadingState'
import { wordSets } from '../data/words'
import { playSuccess } from '../utils/sounds'
import { checkAndUpdateAchievements } from '../utils/achievementManager'

import LanguageSelector from '../components/LanguageSelector'
import CardStackSelector from '../components/CardStackSelector'

function ReviewPage({ currentUser }) {
  const { boxId = '1' } = useParams()
  const boxNumber = parseInt(boxId, 10) || 1

  // Leitner boxes & positions
  const [leitnerBoxes, setLeitnerBoxes] = useState({})
  const [leitnerPositions, setLeitnerPositions] = useState({})
  
  // We’ll store how many total words are *currently active*
  const [activeSet, setActiveSet] = useState(100) // default 100 if not in Firestore

  const [currentIndex, setCurrentIndex] = useState(0)
  const [loadingData, setLoadingData] = useState(true)

  // Language, session size
  const [languageMode, setLanguageMode] = useState('en')
  const [sessionSize, setSessionSize] = useState(15)

  // Track session time
  const sessionStartRef = useRef(null)
  const [statsUpdated, setStatsUpdated] = useState(false)

  const [firstName, setFirstName] = useState('')

  // Load fallback
  function loadBoxesFromLocal() {
    const stored = localStorage.getItem('leitnerBoxes')
    if (stored) return JSON.parse(stored)
    const init = {}
    // Only first 100 active by default if offline
    allWords.slice(0, 100).forEach((w) => {
      init[w.id] = 1
    })
    return init
  }

  // 1) On mount
  useEffect(() => {
    if (!currentUser) {
      setLeitnerBoxes(loadBoxesFromLocal())
      setLeitnerPositions({})
      setLoadingData(false)
      sessionStartRef.current = Date.now()
      return
    }

    const userRef = doc(db, 'users', currentUser.uid)
    const unsub = onSnapshot(
      userRef,
      (snap) => {
        if (!snap.exists()) {
          // doc not found => create
          const initBoxes = {}
          // default 100
          allWords.slice(0, 100).forEach(w => {
            initBoxes[w.id] = 1
          })
          setDoc(userRef, {
            leitnerBoxes: initBoxes,
            leitnerPositions: {},
            activeSet: 100
          }, { merge: true })
          setLeitnerBoxes(initBoxes)
          setLeitnerPositions({})
          setActiveSet(100)
          setLoadingData(false)
          if (!sessionStartRef.current) sessionStartRef.current = Date.now()
          return
        }

        const data = snap.data() || {}
        setLeitnerBoxes(data.leitnerBoxes || {})
        setLeitnerPositions(data.leitnerPositions || {})
        setActiveSet(data.activeSet || 100)
        setLoadingData(false)
        if (!sessionStartRef.current) {
          sessionStartRef.current = Date.now()
        }
      },
      (err) => {
        console.warn('onSnapshot error in ReviewPage, fallback local:', err)
        setLeitnerBoxes(loadBoxesFromLocal())
        setLeitnerPositions({})
        setActiveSet(100)
        setLoadingData(false)
        if (!sessionStartRef.current) {
          sessionStartRef.current = Date.now()
        }
      }
    )

    return () => unsub()
  }, [currentUser])

  // 2) Save changes
  useEffect(() => {
    if (loadingData) return
    if (!Object.keys(leitnerBoxes).length) return

    localStorage.setItem('leitnerBoxes', JSON.stringify(leitnerBoxes))

    if (currentUser) {
      const userRef = doc(db, 'users', currentUser.uid)
      setDoc(
        userRef,
        {
          leitnerBoxes,
          leitnerPositions,
          activeSet
        },
        { merge: true }
      ).catch(e => console.error('Saving to Firestore failed:', e))
    }
  }, [leitnerBoxes, leitnerPositions, activeSet, currentUser, loadingData])

  // 3) finalizeStats
  const finalizeStats = async () => {
    if (!currentUser || statsUpdated) return
    setStatsUpdated(true)

    const endTime = Date.now()
    const elapsedSecs = Math.floor((endTime - (sessionStartRef.current || endTime)) / 1000)

    try {
      const userRef = doc(db, 'users', currentUser.uid)
      const snap = await getDoc(userRef)
      if (!snap.exists()) return

      let { totalTimeSpent = 0, lastStudyDate = '', streak = 0 } = snap.data()
      totalTimeSpent += elapsedSecs

      const todayStr = new Date().toDateString()
      const lastStr = new Date(lastStudyDate).toDateString()
      const nowMid = new Date(todayStr)
      const lastMid = new Date(lastStr)
      const diffDays = Math.floor((nowMid - lastMid) / (1000 * 60 * 60 * 24))

      if (diffDays === 1) streak += 1
      else if (diffDays > 1 || diffDays < 0) streak = 1

      lastStudyDate = todayStr

      await setDoc(userRef, { totalTimeSpent, lastStudyDate, streak }, { merge: true })

      // Then check achievements
      const updatedUserData = {
        ...snap.data(),
        totalTimeSpent,
        lastStudyDate,
        streak
      }
      const newAchievements = await checkAndUpdateAchievements(updatedUserData, userRef)
      if (newAchievements) {
        playSuccess()
      }
    } catch (err) {
      console.error('finalizeStats error:', err)
    }
  }

  // 4) Build boxWords
  // Filter out only the first `activeSet` words from all
  const limitedWords = allWords.slice(0, activeSet)
  // Then find which are in the current box
  const boxWordsRaw = limitedWords.filter((w) => leitnerBoxes[w.id] === boxNumber)

  // You can also sort by positions if you want
  const boxWords = boxWordsRaw.sort((a, b) => {
    const posA = leitnerPositions[a.id] || 0
    const posB = leitnerPositions[b.id] || 0
    return posA - posB
  })

  const maxSessionPossible = Math.min(40, boxWords.length)
  const sessionWords = boxWords.slice(0, sessionSize)

  const handleSessionSizeChange = (e) => {
    setSessionSize(parseInt(e.target.value, 10))
  }

  // Moves
  const moveToNextCard = () => setCurrentIndex((prev) => prev + 1)

  const moveToBoxOne = (wordId) => {
    setLeitnerBoxes(prev => ({ ...prev, [wordId]: 1 }))
    setLeitnerPositions(prev => ({
      ...prev,
      [wordId]: Date.now() // big => appended last
    }))
  }

  const moveToNextBox = (wordId) => {
    setLeitnerBoxes(prev => {
      const currentBox = prev[wordId]
      const nextBox = currentBox < 5 ? currentBox + 1 : 5
      return { ...prev, [wordId]: nextBox }
    })
    // Positions can remain same if you want
  }

  const handleLanguageChange = (mode) => {
    setLanguageMode(mode)
  }

  // fetch user data for firstName
  useEffect(() => {
    async function fetchUserData() {
      if (!currentUser) return
      try {
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid))
        if (userDoc.exists()) {
          const data = userDoc.data()
          if (data.firstName) {
            setFirstName(data.firstName)
          }
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
              <svg
                className="w-8 h-8 text-lime-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Box {boxNumber} is Empty</h2>
            <p className="text-gray-600 mb-8">
              Great job! You've completed all the words in this box for now. Come back later or try another box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/profile"
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

  // If done with session
  if (currentIndex >= sessionWords.length) {
    if (!statsUpdated && currentUser && sessionStartRef.current) {
      finalizeStats()
      playSuccess()
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-lime-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 
                   0 11-18 0 9 9 
                   0 0118 0z"
              />
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
            to="/profile"
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

  // We have some words left
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
            onChange={handleSessionSizeChange}
            max={maxSessionPossible}
          />
        </div>
      </div>
    </div>
  )
}

export default ReviewPage
