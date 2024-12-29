// src/pages/ReviewPage.jsx
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { words } from '../data/words'
import Card from '../components/Card'

function ReviewPage({ currentUser }) {
  const { boxId = '1' } = useParams()
  const boxNumber = parseInt(boxId, 10) || 1

  const [leitnerBoxes, setLeitnerBoxes] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loadingData, setLoadingData] = useState(true)
  const [error, setError] = useState(null)

  // fallback for guests or if snapshot fails
  function loadFromLocal() {
    const stored = localStorage.getItem('leitnerBoxes')
    if (stored) return JSON.parse(stored)
    const init = {}
    words.forEach(w => { init[w.id] = 1 })
    return init
  }

  useEffect(() => {
    if (!currentUser) {
      setLeitnerBoxes(loadFromLocal())
      setLoadingData(false)
      return
    }

    const ref = doc(db, 'users', currentUser.uid)
    const unsub = onSnapshot(ref, snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.data()
        setLeitnerBoxes(data.leitnerBoxes || {})
        setLoadingData(false)
      } else {
        // Initialize user document if it doesn't exist
        const init = {}
        words.forEach(w => { init[w.id] = 1 })
        setDoc(ref, { 
          leitnerBoxes: init,
          lastReviewDates: {},
          createdAt: new Date().toISOString()
        })
        .then(() => {
          setLeitnerBoxes(init)
          setLoadingData(false)
        })
        .catch(err => {
          console.error('Error creating user document:', err)
          setError('Failed to initialize user data')
          setLoadingData(false)
        })
      }
    }, (err) => {
      console.error('Firestore subscription error:', err)
      setError('Failed to load data')
      setLeitnerBoxes(loadFromLocal())
      setLoadingData(false)
    })

    return () => unsub()
  }, [currentUser])

  // Save to local + Firestore
  useEffect(() => {
    if (loadingData || !Object.keys(leitnerBoxes).length) return

    // Always save to local storage as fallback
    localStorage.setItem('leitnerBoxes', JSON.stringify(leitnerBoxes))

    // Save to Firestore if logged in
    if (currentUser) {
      const ref = doc(db, 'users', currentUser.uid)
      updateDoc(ref, {
        leitnerBoxes,
        lastUpdated: new Date().toISOString()
      })
      .catch(err => {
        console.error('Failed to save to Firestore:', err)
        setError('Failed to save progress')
      })
    }
  }, [leitnerBoxes, currentUser, loadingData])

  const moveToNextCard = () => setCurrentIndex(prev => prev + 1)

  const moveToNextBox = async (wordId) => {
    if (!currentUser) {
      setLeitnerBoxes(prev => {
        const currentBox = prev[wordId]
        const nextBox = currentBox < 5 ? currentBox + 1 : 5
        return { ...prev, [wordId]: nextBox }
      })
      return
    }

    try {
      const ref = doc(db, 'users', currentUser.uid)
      const nextBox = leitnerBoxes[wordId] < 5 ? leitnerBoxes[wordId] + 1 : 5
      
      await updateDoc(ref, {
        [`leitnerBoxes.${wordId}`]: nextBox,
        [`lastReviewDates.box${nextBox}`]: new Date().toISOString()
      })

      setLeitnerBoxes(prev => ({
        ...prev,
        [wordId]: nextBox
      }))
    } catch (err) {
      console.error('Failed to update box:', err)
      setError('Failed to save progress')
    }
  }

  const moveToBoxOne = async (wordId) => {
    if (!currentUser) {
      setLeitnerBoxes(prev => ({ ...prev, [wordId]: 1 }))
      return
    }

    try {
      const ref = doc(db, 'users', currentUser.uid)
      await updateDoc(ref, {
        [`leitnerBoxes.${wordId}`]: 1,
        [`lastReviewDates.box1`]: new Date().toISOString()
      })

      setLeitnerBoxes(prev => ({
        ...prev,
        [wordId]: 1
      }))
    } catch (err) {
      console.error('Failed to move to box 1:', err)
      setError('Failed to save progress')
    }
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  // Filter the words for this box
  const boxWords = words.filter((w) => leitnerBoxes[w.id] === boxNumber)
  const sessionWords = boxWords.slice(0, 10)

  if (loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading review data...</p>
      </div>
    )
  }

  // If no words => box empty
  if (sessionWords.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Box {boxNumber} is Empty</h2>
            <p className="text-gray-600 mb-8">
              Great job! You've completed all the words in this box for now. Come back later or try another box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/lightner"
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

  // If user finished the session
  if (currentIndex >= sessionWords.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            to="/lightner"
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

  // Show current card
  const currentWordData = sessionWords[currentIndex]
  const currentCardNumber = currentIndex + 1
  const totalCards = sessionWords.length
  const progressPercentage = (currentCardNumber / totalCards) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 pt-32 px-4">
      <div className="max-w-4xl mx-auto pb-32">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 bg-white rounded-full px-4 py-1 
                          shadow-sm border border-gray-100 mb-4"
          >
            <span className="text-sm font-medium text-gray-600">Box</span>
            <span className="text-sm font-bold text-blue-600">{boxNumber}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Review Session</h1>
          <p className="text-gray-600">Swipe right if you know it, left if you need more practice</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
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

        {/* Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent pointer-events-none" />
          <Card
            wordData={currentWordData}
            boxNumber={leitnerBoxes[currentWordData.id]}
            moveToNextBox={moveToNextBox}
            moveToBoxOne={moveToBoxOne}
            goToNextCard={moveToNextCard}
          />
        </div>
      </div>
    </div>
  )
}

export default ReviewPage
