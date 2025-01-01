import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { words as allWords } from '../data/words'
import '../index.css' // Ensure you have your global/tailwind styles
import { Helmet } from 'react-helmet'

/**
 * We'll take a small subset of words (e.g., 5) for the demo.
 * You can pick fewer or more as you like.
 */
const DEMO_WORDS = allWords.slice(0, 5)

export default function DemoPage() {
  // 1) The "demoBoxes" map: { [wordId]: boxNumber }, initially all in box #1
  const [demoBoxes, setDemoBoxes] = useState({})
  // We'll track which card index is "current" in the top card display
  const [currentIndex, setCurrentIndex] = useState(0)
  // For the tutorial overlay
  const [tutorialStep, setTutorialStep] = useState(0)

  // Refs for tutorial spotlighting
  const cardRef = useRef(null)
  const boxesRef = useRef(null)
  const tutorialOverlayRef = useRef(null)

  // 5) Boxes array
  const BOXES = [1, 2, 3, 4, 5]

  // 2) On mount => initialize all 5 words to box #1
  useEffect(() => {
    const init = {}
    DEMO_WORDS.forEach((w) => {
      init[w.id] = 1
    })
    setDemoBoxes(init)
  }, [])

  // 3) Move a card up to the next box
  const moveToNextBox = (wordId) => {
    setDemoBoxes((prev) => {
      const oldBox = prev[wordId]
      const newBox = oldBox < 5 ? oldBox + 1 : 5
      return { ...prev, [wordId]: newBox }
    })
  }

  // 4) Move a card to box #1
  const moveToBoxOne = (wordId) => {
    setDemoBoxes((prev) => ({ ...prev, [wordId]: 1 }))
  }

  // Advance to next card index (just cycling among the subset)
  const goToNextCard = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1
      return next < DEMO_WORDS.length ? next : 0
    })
  }

  // Simple "box status" concept for visual styling
  function getBoxStatus(boxNumber, count) {
    if (count === 0) return 'empty'
    // In a real app, you'd track last review date, etc.
    // For demo, let's just say boxNumber >= 4 => 'due'
    if (boxNumber >= 4) return 'due'
    return 'reviewed'
  }

  // 5) Provide a "Reset Demo" to send all cards back to box #1
  const handleReset = () => {
    const init = {}
    DEMO_WORDS.forEach((w) => {
      init[w.id] = 1
    })
    setDemoBoxes(init)
    setCurrentIndex(0)
  }

  // 6) Basic tutorial steps
  const steps = [
    {
      id: 1,
      ref: cardRef,
      title: 'Interactive Flashcard',
      text: `Tap the card on mobile or use the "Show Meaning" button on desktop to reveal translations. Listen to pronunciation with the speaker icon in the top-left corner.`
    },
    {
      id: 2,
      ref: cardRef,
      title: 'Rate Your Knowledge',
      text: `On mobile, swipe right if you know it, or left if you need practice. On desktop, use the left and right arrow keys.`
    },
    {
      id: 3,
      ref: boxesRef,
      title: 'Smart Learning System',
      text: `Your progress is tracked through these boxes. Watch as words move between them based on your responses.`
    }
  ]

  const currentStepData = steps.find((s) => s.id === tutorialStep)

  // 7) Spotlight logic
  const getSpotlightStyle = (r) => {
    if (!r?.current) return {}
    const rect = r.current.getBoundingClientRect()
    return {
      top: rect.top - 8 + 'px',
      left: rect.left - 8 + 'px',
      width: rect.width + 16 + 'px',
      height: rect.height + 16 + 'px'
    }
  }

  // Update scrollToElement to be more generic
  const scrollToElement = (ref) => {
    return new Promise(resolve => {
      if (ref?.current) {
        ref.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        })
        // Wait for scroll animation to complete
        setTimeout(resolve, 500)
      } else {
        resolve()
      }
    })
  }

  // Update the handlers to use the generic scroll function
  const handleStartTutorial = async () => {
    // Scroll to first element before starting tutorial
    await scrollToElement(cardRef)
    setTutorialStep(1)
  }

  const flipCard = () => {
    const showButton = document.querySelector('button[class*="showButton"]')
    if (showButton) {
      showButton.click()
    }
  }

  const handleTutorialNext = async () => {
    const nextStep = tutorialStep < steps.length ? tutorialStep + 1 : 0
    
    // Find the next step's ref
    const nextStepData = steps.find(s => s.id === nextStep)
    if (nextStepData?.ref) {
      await scrollToElement(nextStepData.ref)
    }
    
    // If moving to "Rate Your Knowledge" step, flip the card
    if (nextStep === 2) {
      setTimeout(flipCard, 600) // Small delay after scroll completes
    }
    
    setTutorialStep(nextStep)
  }

  const handleTutorialBack = async () => {
    const nextStep = tutorialStep > 1 ? tutorialStep - 1 : 0
    
    // Find the previous step's ref
    const nextStepData = steps.find(s => s.id === nextStep)
    if (nextStepData?.ref) {
      await scrollToElement(nextStepData.ref)
    }
    
    // If moving to "Rate Your Knowledge" step, flip the card
    if (nextStep === 2) {
      setTimeout(flipCard, 600)
    }
    
    setTutorialStep(nextStep)
  }

  const handleTutorialClose = () => setTutorialStep(0)

  // 8) For the top card
  const currentWordData = DEMO_WORDS[currentIndex]
  const currentBoxNumber = demoBoxes[currentWordData.id] || 1

  // Helper: get how many cards in a given box
  const getCountForBox = (boxNumber) => {
    return Object.values(demoBoxes).filter((b) => b === boxNumber).length
  }

  return (
    <>
      <Helmet>
        <title>Try Our Smart Learning System - Memoranta Demo</title>
        <meta 
          name="description" 
          content="Experience Memoranta's interactive French learning system. Try our smart flashcards, see how spaced repetition works, and discover a better way to learn vocabulary."
        />
        
        {/* OpenGraph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Try Our Smart Learning System - Memoranta Demo" />
        <meta property="og:description" content="Experience Memoranta's interactive French learning system. Try our smart flashcards, see how spaced repetition works, and discover a better way to learn vocabulary." />
        <meta property="og:image" content="https://www.memoranta.com/assets/logo-5c9ad257.png" />
        <meta property="og:url" content="https://memoranta.com/demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 pb-16 mt-8">
        {/* Enhanced Header Section */}
        <div className="max-w-4xl mx-auto text-center pt-12 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Try Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-lime-600 ml-2">
              Smart Learning System
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience how our spaced repetition system helps you learn French vocabulary efficiently. 
            Master words at your own pace with our intelligent review system.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 mx-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Learning</h3>
              <p className="text-gray-600 text-sm">
                Flip flashcards to test your knowledge. Rate how well you know each word to personalize your learning journey.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-lime-50 rounded-xl flex items-center justify-center text-lime-600 mb-4 mx-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adaptive System</h3>
              <p className="text-gray-600 text-sm">
                Words move between boxes automatically. Well-known words appear less frequently, while challenging ones get more attention.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4 mx-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Efficient Progress</h3>
              <p className="text-gray-600 text-sm">
                Focus on what you need to learn. Review familiar words less often while mastering new vocabulary at your own pace.
              </p>
            </div>
          </div>

          {/* Demo Section Separator */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-6 py-3 text-lg font-medium text-gray-900 bg-gradient-to-r from-blue-50 via-white to-lime-50 rounded-full">
                Try It Yourself
              </span>
            </div>
          </div>

          {/* Demo Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <button
              onClick={handleStartTutorial}
              className="px-6 py-3 text-base font-medium rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 
                       transform transition-all duration-300 flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Start Tutorial
            </button>

            <button
              onClick={handleReset}
              className="px-6 py-3 text-base font-medium rounded-xl text-gray-700 bg-white border border-gray-300 
                       hover:bg-gray-50 transform transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset Demo
            </button>

            <Link
              to="/"
              className="px-6 py-3 text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 
                       hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 hover:shadow-md 
                       flex items-center gap-2"
            >
              Back to Home
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Card Display with Label */}
        <div className="max-w-xl mx-auto px-4 mb-24">
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-blue-700 bg-blue-50">
              Try the Flashcard System
            </span>
          </div>
          <div ref={cardRef} className="mb-8">
            <Card
              wordData={currentWordData}
              boxNumber={currentBoxNumber}
              moveToNextBox={(id) => {
                moveToNextBox(id)
                goToNextCard()
              }}
              moveToBoxOne={(id) => {
                moveToBoxOne(id)
                goToNextCard()
              }}
              goToNextCard={goToNextCard}
              languageMode="en"
              currentUser={null}
              firstName=""
            />
          </div>
        </div>

        {/* Boxes Display with Enhanced Styling */}
        <div className="max-w-5xl mx-auto px-4" ref={boxesRef}>
          <div className="text-center m-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Learning Progress Visualization
            </h2>
            <p className="text-gray-600 text-sm">
              Watch how words move through different stages as you learn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {BOXES.map((boxNum) => {
              const count = getCountForBox(boxNum)
              const status = getBoxStatus(boxNum, count)
              // Collect which words are in this box
              const wordsInBox = DEMO_WORDS.filter((w) => demoBoxes[w.id] === boxNum)

              return (
                <div
                  key={boxNum}
                  className={`relative bg-white rounded-xl p-6 shadow border border-gray-100 
                              transition-transform transform hover:-translate-y-1`}
                >
                  {/* "Status glow" behind */}
                  <div
                    className={`absolute -inset-0.5 rounded-xl 
                      ${status === 'due' ? 'bg-blue-100 animate-pulse' : 
                        status === 'reviewed' ? 'bg-lime-50' : 'bg-gray-100'
                      }
                      opacity-25 pointer-events-none`
                    }
                  />

                  <div className="relative">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-900">Box {boxNum}</h3>
                      <span className={`text-3xl font-extrabold ${
                          status === 'due' ? 'text-blue-500' :
                          status === 'reviewed' ? 'text-lime-600' : 'text-gray-400'
                        }`}
                      >
                        {count}
                      </span>
                    </div>

                    {/* Optional "progress bar" concept */}
                    <div className="h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
                      <div
                        className={`${status === 'due' ? 'bg-blue-400' : status === 'reviewed' ? 'bg-lime-400' : 'bg-gray-300' } 
                                    h-full transition-all duration-500`}
                        style={{ width: `${(count / DEMO_WORDS.length) * 100}%` }}
                      />
                    </div>

                    {/* List words in the box */}
                    {wordsInBox.map((w) => (
                      <div key={w.id} className="text-sm text-gray-700 bg-gray-50 rounded-md px-2 py-1 mb-1">
                        {w.word}
                      </div>
                    ))}

                    {count === 0 && (
                      <p className="text-xs text-gray-400">No cards here yet</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* TUTORIAL OVERLAY */}
        {tutorialStep > 0 && currentStepData && (
          <>
            {/* Dark backdrop - removed backdrop-blur-sm */}
            <div
              ref={tutorialOverlayRef}
              className="fixed inset-0 bg-black/50 z-40"
            />
            {/* "Spotlight" box */}
            {currentStepData.ref && (
              <div
                className="fixed rounded-xl border-4 border-blue-300/80 pointer-events-none z-50"
                style={{
                  ...getSpotlightStyle(currentStepData.ref),
                  boxShadow: '0 0 0 9999px rgba(0,0,0,0.5)',
                  transition: 'all 0.3s ease'
                }}
              />
            )}
            {/* Tutorial content */}
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <div className="relative bg-white rounded-2xl p-6 max-w-md w-full shadow-lg">
                <button
                  onClick={handleTutorialClose}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
                  title="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{currentStepData.title}</h3>
                <p className="text-gray-600 mb-4">{currentStepData.text}</p>

                <div className="flex justify-end gap-3">
                  {tutorialStep > 1 && (
                    <button
                      onClick={handleTutorialBack}
                      className="px-4 py-2.5 text-sm font-medium rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
                    >
                      Back
                    </button>
                  )}
                  {tutorialStep < steps.length ? (
                    <button
                      onClick={handleTutorialNext}
                      className="px-4 py-2.5 text-sm font-medium rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 transition"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleTutorialClose}
                      className="px-4 py-2.5 text-sm font-medium rounded-xl text-lime-700 bg-lime-50 hover:bg-lime-100 transition"
                    >
                      Finish
                    </button>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
