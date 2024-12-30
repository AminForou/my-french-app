// src/components/Card.jsx

import React, { useState, useEffect, useCallback, useRef } from 'react'
import styles from './Card.module.css'
import { doc, setDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'  // <-- your Firestore db import
import Toast from './Toast'
import { playFlag } from '../utils/sounds'

function Card({
  wordData,
  boxNumber,
  moveToNextBox,
  moveToBoxOne,
  goToNextCard,
  languageMode = 'en', // 'en' | 'fa' | 'both'
  currentUser = null,   // optionally pass user so we know who is flagging if they're logged in
  firstName = ''
}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState(null)

  // We'll store available speechSynthesis voices here
  const [allVoices, setAllVoices] = useState([])

  // For swipe/touch logic
  const touchStartX = useRef(null)
  const touchStartY = useRef(null)
  const SWIPE_THRESHOLD = 50

  // ---------------------------
  // 1) On mount, gather voices
  // ---------------------------
  useEffect(() => {
    const handleVoicesChanged = () => {
      const voices = window.speechSynthesis.getVoices()
      setAllVoices(voices)
    }
    window.speechSynthesis.onvoiceschanged = handleVoicesChanged
    handleVoicesChanged()
    return () => {
      window.speechSynthesis.onvoiceschanged = null
    }
  }, [])

  // ---------------------------
  // 2) Flip card
  // ---------------------------
  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev)
  }, [])

  // ---------------------------
  // 3) Animate "Need Practice"
  // ---------------------------
  const finalizeWrong = useCallback(() => {
    moveToBoxOne(wordData.id)
    goToNextCard()
    setIsFlipped(false)
    setSwipeDirection(null)
  }, [moveToBoxOne, goToNextCard, wordData.id])

  const handleWrong = useCallback(() => {
    if (swipeDirection) return
    setSwipeDirection('left')
    setTimeout(() => finalizeWrong(), 500)
  }, [swipeDirection, finalizeWrong])

  // ---------------------------
  // 4) Animate "Know It"
  // ---------------------------
  const finalizeCorrect = useCallback(() => {
    moveToNextBox(wordData.id)
    goToNextCard()
    setIsFlipped(false)
    setSwipeDirection(null)
  }, [moveToNextBox, goToNextCard, wordData.id])

  const handleCorrect = useCallback(() => {
    if (swipeDirection) return
    setSwipeDirection('right')
    setTimeout(() => finalizeCorrect(), 500)
  }, [swipeDirection, finalizeCorrect])

  // ---------------------------
  // 5) Pronounce in French
  // ---------------------------
  const handlePronounce = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      alert('Sorry, your browser does not support speech synthesis.')
      return
    }
    const utterance = new SpeechSynthesisUtterance(wordData.word)
    utterance.lang = 'fr-FR'

    // Attempt to find "Amélie" or fallback fr-FR
    let chosenVoice = allVoices.find(voice =>
      voice.name.toLowerCase().includes('amélie') ||
      voice.name.toLowerCase().includes('amelie')
    )
    if (!chosenVoice) {
      chosenVoice = allVoices.find(voice => voice.lang.startsWith('fr'))
    }
    if (chosenVoice) {
      utterance.voice = chosenVoice
    }
    window.speechSynthesis.speak(utterance)
  }, [allVoices, wordData.word])

  // ---------------------------
  // 6) Keyboard shortcuts
  // ---------------------------
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tagName = e.target.tagName.toLowerCase()
      if (tagName === 'input' || tagName === 'textarea') return

      if (e.key === ' ') {
        e.preventDefault()
        handleFlip()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handleWrong()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleCorrect()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        handlePronounce()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleFlip, handleWrong, handleCorrect, handlePronounce])

  // ---------------------------
  // 7) Touch/Swipe logic
  // ---------------------------
  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null || touchStartY.current == null) return

    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    // reset
    touchStartX.current = null
    touchStartY.current = null

    if (absDeltaX > SWIPE_THRESHOLD && absDeltaX > absDeltaY) {
      if (deltaX > 0) handleCorrect()
      else handleWrong()
      return
    }

    // Tap => flip if not pressed "pronounce" or "showMeaning"
    const target = e.target
    const isPronounce = target.closest(`.${styles.pronounceButton}`)
    const isShowMeaning = target.closest(`.${styles.showButton}`)
    if (isPronounce || isShowMeaning) {
      return
    }
    handleFlip()
  }

  // ---------------------------
  // 8) Language-based display
  // ---------------------------
  let displayedMeaning = ''
  let displayedExample = ''

  if (wordData.meaning && wordData.example) {
    if (languageMode === 'en') {
      displayedMeaning = wordData.meaning.en
    } else if (languageMode === 'fa') {
      displayedMeaning = wordData.meaning.fa
    } else {
      displayedMeaning = `${wordData.meaning.en} (${wordData.meaning.fa})`
    }

    // Example always shows the FR original + the chosen language
    const translation = languageMode === 'fa'
      ? wordData.example.fa
      : languageMode === 'both'
        ? `${wordData.example.en} / ${wordData.example.fa}`
        : wordData.example.en

    displayedExample = `${wordData.example.fr}\n${translation}`
  }

  // ---------------------------
  // 9) Flag a Card
  // ---------------------------
  const [showFlagModal, setShowFlagModal] = useState(false)
  const [selectedReason, setSelectedReason] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success')

  const flagReasons = [
    { id: 'meaning', label: 'Incorrect Meaning' },
    { id: 'pronunciation', label: 'Wrong Pronunciation' },
    { id: 'example', label: 'Incorrect Example' },
    { id: 'tip', label: 'Incorrect Learning Tip' },
    { id: 'other', label: 'Other Issue' }
  ]

  const handleFlagClick = (e) => {
    e.stopPropagation()
    setShowFlagModal(true)
  }

  const handleFlag = async (reason) => {
    try {
      const flagsRef = collection(db, 'flags')
      
      await setDoc(doc(flagsRef), {
        cardId: wordData.id,
        flaggedBy: currentUser ? currentUser.uid : 'anonymous',
        flaggedByName: firstName || 'anonymous',
        flaggedAt: serverTimestamp(),
        reason: reason,
        resolved: false
      })
      
      setShowFlagModal(false)
      setToastMessage('Thank you for helping us improve! We will review this card.')
      setToastType('success')
      setShowToast(true)
      playFlag()
      
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error('Error flagging card:', err)
      setShowFlagModal(false)
      setToastMessage('Oops, something went wrong flagging this card.')
      setToastType('error')
      setShowToast(true)
      
      setTimeout(() => setShowToast(false), 3000)
    }
  }

  // ---------------------------
  // 10) Decide swipe animation
  // ---------------------------
  const swipeClass = swipeDirection === 'left'
    ? styles.swipeleft
    : swipeDirection === 'right'
      ? styles.swiperight
      : ''

  return (
    <>
      <div
        className={`${styles.card} ${swipeClass}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}>
          
          {/* Front */}
          <div className={styles.cardFront}>
            <div className={styles.boxNumber}>Box #{boxNumber}</div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePronounce()
              }}
              className={styles.pronounceButton}
              title="Listen to pronunciation"
            >
              <svg className={styles.soundIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072
                     M17.95 6.05a8 8 0 010 11.9
                     M6.5 8.788v6.424a.5.5 0 00.757.429
                     l5.158-3.212a.5.5 0 000-.858L7.257 
                     8.36a.5.5 0 00-.757.429z"
                />
              </svg>
            </button>

            <div className={styles.word}>{wordData.word}</div>

            <button
              className={styles.showButton}
              onClick={(e) => {
                e.stopPropagation()
                handleFlip()
              }}
            >
              Show Meaning
            </button>
          </div>

          {/* Back */}
          <div className={styles.cardBack}>
            <div className="flex items-center gap-2">
              <div className={styles.boxNumber}>Box #{boxNumber}</div>
              <button
                type="button"
                onClick={handleFlagClick}
                className="opacity-30 hover:opacity-100 p-1.5 rounded-lg text-red-600 hover:bg-red-50 
                          transition-all duration-200 flex items-center gap-1 text-xs font-medium"
                title="Report an issue"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z"/>
                </svg>
              </button>
            </div>
            <div className={styles.content}>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Meaning</div>
                <div className={styles.fieldContent}>
                  {displayedMeaning || '—'}
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Pronunciation</div>
                <div className={styles.fieldContent}>
                  {wordData.pronunciation || '—'}
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Example</div>
                <div className={styles.exampleContainer}>
                  <div className={styles.frenchExample}>
                    {wordData.example.fr || '—'}
                  </div>
                  <div className={styles.translationText}>
                    {languageMode === 'fa' 
                      ? wordData.example.fa 
                      : languageMode === 'both'
                        ? `${wordData.example.en} / ${wordData.example.fa}`
                        : wordData.example.en || '—'
                    }
                  </div>
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Tip</div>
                <div className={styles.fieldContent}>
                  {wordData.tip || '—'}
                </div>
              </div>
            </div>

            <div className={styles.actionArea}>
              <div className={styles.buttons}>
                <button className={styles.wrongButton} onClick={handleWrong}>
                  <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span>Need Practice</span>
                </button>

                <button className={styles.correctButton} onClick={handleCorrect}>
                  <span>Know It</span>
                  <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>

              <div className={styles.keyboardHint}>
                <span><kbd>Space</kbd> Flip</span>
                <span><kbd>←</kbd> Need Practice</span>
                <span><kbd>→</kbd> Know It</span>
                <span><kbd>↑</kbd> Pronounce</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flag Confirmation Modal */}
      {showFlagModal && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-auto shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Report Card Issue</h3>
              <p className="text-gray-600 text-sm">
                Please select the reason for reporting this card. This helps us improve the content.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {flagReasons.map(reason => (
                <button
                  key={reason.id}
                  onClick={() => handleFlag(reason.label)}
                  className="w-full px-4 py-3 text-left text-sm font-medium rounded-xl text-gray-700 
                           hover:bg-red-50 hover:text-red-700 transition-colors duration-200
                           flex items-center gap-3"
                >
                  <div className="w-4 h-4 rounded-full border-2 border-current flex-shrink-0" />
                  {reason.label}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowFlagModal(false)}
                className="flex-1 px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 
                         bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <Toast 
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}

export default Card
