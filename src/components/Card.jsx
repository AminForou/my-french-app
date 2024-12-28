// src/components/Card.js
import React, { useState, useEffect, useCallback, useRef } from 'react'
import styles from './Card.module.css'

function Card({
  wordData,
  boxNumber,
  moveToNextBox,
  moveToBoxOne,
  goToNextCard
}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState(null)
  
  // Store all voices in state, updated via onvoiceschanged
  const [allVoices, setAllVoices] = useState([])

  const touchStartX = useRef(null)
  const touchStartY = useRef(null)
  const SWIPE_THRESHOLD = 50

  // 1) On mount, listen for voice changes. This helps Safari populate voices.
  useEffect(() => {
    const handleVoicesChanged = () => {
      const voices = window.speechSynthesis.getVoices()
      setAllVoices(voices)
    }

    // If onvoiceschanged fires after load
    window.speechSynthesis.onvoiceschanged = handleVoicesChanged
    // Also call once now (Chrome might have them immediately)
    handleVoicesChanged()

    return () => {
      window.speechSynthesis.onvoiceschanged = null
    }
  }, [])

  // Flip card
  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev)
  }, [])

  // FINALIZE "Need Practice"
  const finalizeWrong = useCallback(() => {
    moveToBoxOne(wordData.id)
    goToNextCard()
    setIsFlipped(false)
    setSwipeDirection(null)
  }, [moveToBoxOne, goToNextCard, wordData.id])

  // FINALIZE "Know It"
  const finalizeCorrect = useCallback(() => {
    moveToNextBox(wordData.id)
    goToNextCard()
    setIsFlipped(false)
    setSwipeDirection(null)
  }, [moveToNextBox, goToNextCard, wordData.id])

  // Animate "Wrong"
  const handleWrong = useCallback(() => {
    if (swipeDirection) return
    setSwipeDirection('left')
    setTimeout(() => finalizeWrong(), 500)
  }, [swipeDirection, finalizeWrong])

  // Animate "Correct"
  const handleCorrect = useCallback(() => {
    if (swipeDirection) return
    setSwipeDirection('right')
    setTimeout(() => finalizeCorrect(), 500)
  }, [swipeDirection, finalizeCorrect])

  // 2) Pronounce in French, always preferring "Amélie" if found
  const handlePronounce = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      alert('Sorry, your browser does not support speech synthesis.')
      return
    }

    const utterance = new SpeechSynthesisUtterance(wordData.word)
    utterance.lang = 'fr-FR'

    // 2a) Attempt to find voice with "Amélie" or "Amelie" in name
    let chosenVoice = allVoices.find(voice =>
      voice.name.toLowerCase().includes('amélie') ||
      voice.name.toLowerCase().includes('amelie')
    )

    // 2b) If not found, fallback to any fr-FR
    if (!chosenVoice) {
      chosenVoice = allVoices.find(voice => voice.lang.startsWith('fr'))
    }

    if (chosenVoice) {
      utterance.voice = chosenVoice
      // Optionally: utterance.rate = 0.95; // slow down slightly, etc.
    }

    window.speechSynthesis.speak(utterance)
  }, [allVoices, wordData.word])

  // Keyboard shortcuts
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

  // Touch logic for swipes
  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e) => {
    if (e.touches.length !== 1 || touchStartX.current == null) return
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null || touchStartY.current == null) return

    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    const deltaY = e.changedTouches[0].clientY - touchStartY.current
    const absDeltaX = Math.abs(deltaX)
    const absDeltaY = Math.abs(deltaY)

    touchStartX.current = null
    touchStartY.current = null

    // Check horizontal swipe
    if (absDeltaX > SWIPE_THRESHOLD && absDeltaX > absDeltaY) {
      if (deltaX > 0) {
        handleCorrect()
      } else {
        handleWrong()
      }
      return
    }

    // Tap
    const target = e.target
    const isPronounce = target.closest(`.${styles.pronounceButton}`)
    const isShowMeaning = target.closest(`.${styles.showButton}`)
    if (isPronounce || isShowMeaning) {
      return
    }
    handleFlip()
  }

  // Add .swipeleft or .swiperight for the CSS animations
  const swipeClass = swipeDirection === 'left'
    ? styles.swipeleft
    : swipeDirection === 'right'
      ? styles.swiperight
      : ''

  return (
    <div
      className={`${styles.card} ${swipeClass}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={`${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}>
        
        {/* Front side */}
        <div className={styles.cardFront}>
          <div className={styles.boxNumber}>Box #{boxNumber}</div>

          {/* Pronounce Button */}
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
                d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8.788v6.424a.5.5 0 00.757.429l5.158-3.212a.5.5 0 000-.858L7.257 8.36a.5.5 0 00-.757.429z"
              />
            </svg>
          </button>

          <div className={styles.word}>{wordData.word}</div>
          
          {/* Show meaning => flip card */}
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

        {/* Back side */}
        <div className={styles.cardBack}>
          <div className={styles.boxNumber}>Box #{boxNumber}</div>
          <div className={styles.content}>
            <div className={styles.field}>
              <div className={styles.fieldLabel}>Meaning</div>
              <div className={styles.fieldContent}>{wordData.meaning}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.fieldLabel}>Pronunciation</div>
              <div className={styles.fieldContent}>{wordData.pronunciation}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.fieldLabel}>Example</div>
              <div className={styles.fieldContent}>{wordData.example}</div>
            </div>
            <div className={styles.field}>
              <div className={styles.fieldLabel}>Tip</div>
              <div className={styles.fieldContent}>{wordData.tip}</div>
            </div>
          </div>

          <div className={styles.actionArea}>
            <div className={styles.buttons}>
              <button className={styles.wrongButton} onClick={() => handleWrong()}>
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
              <button className={styles.correctButton} onClick={() => handleCorrect()}>
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
  )
}

export default Card
