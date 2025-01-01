// src/pages/HomePage.js
import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { wordSets } from '../data/words'
import { Helmet } from 'react-helmet'
import Card from '../components/Card'
import { words as allWords } from '../data/words'


function HomePage({ currentUser }) {
  const [demoBoxes, setDemoBoxes] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const DEMO_WORDS = allWords.slice(0, 5)
  const BOXES = [1, 2, 3, 4, 5]
  const [tutorialStep, setTutorialStep] = useState(0)
  const cardRef = useRef(null)
  const boxesRef = useRef(null)
  const tutorialOverlayRef = useRef(null)

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

  const scrollToElement = (ref) => {
    return new Promise(resolve => {
      if (ref?.current) {
        ref.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        })
        setTimeout(resolve, 500)
      } else {
        resolve()
      }
    })
  }

  const handleStartTutorial = async () => {
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
    
    const nextStepData = steps.find(s => s.id === nextStep)
    if (nextStepData?.ref) {
      await scrollToElement(nextStepData.ref)
    }
    
    if (nextStep === 2) {
      setTimeout(flipCard, 600)
    }
    
    setTutorialStep(nextStep)
  }

  const handleTutorialBack = async () => {
    const nextStep = tutorialStep > 1 ? tutorialStep - 1 : 0
    
    const nextStepData = steps.find(s => s.id === nextStep)
    if (nextStepData?.ref) {
      await scrollToElement(nextStepData.ref)
    }
    
    if (nextStep === 2) {
      setTimeout(flipCard, 600)
    }
    
    setTutorialStep(nextStep)
  }

  const handleTutorialClose = () => setTutorialStep(0)

  useEffect(() => {
    const init = {}
    DEMO_WORDS.forEach((w) => {
      init[w.id] = 1
    })
    setDemoBoxes(init)
  }, [])

  const moveToNextBox = (wordId) => {
    setDemoBoxes((prev) => {
      const oldBox = prev[wordId]
      const newBox = oldBox < 5 ? oldBox + 1 : 5
      return { ...prev, [wordId]: newBox }
    })
  }

  const moveToBoxOne = (wordId) => {
    setDemoBoxes((prev) => ({ ...prev, [wordId]: 1 }))
  }

  const goToNextCard = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1
      return next < DEMO_WORDS.length ? next : 0
    })
  }

  const getCountForBox = (boxNumber) => {
    return Object.values(demoBoxes).filter((b) => b === boxNumber).length
  }

  const getBoxStatus = (boxNumber, count) => {
    if (count === 0) return 'empty'
    if (boxNumber >= 4) return 'due'
    return 'reviewed'
  }

  const handleReset = () => {
    const init = {}
    DEMO_WORDS.forEach((w) => {
      init[w.id] = 1
    })
    setDemoBoxes(init)
    setCurrentIndex(0)
  }

  return (
    <>
    <Helmet>
      <title>Memoranta: Master French Words with Confidence</title>
      <meta 
        name="description" 
        content="Learn and retain French vocabulary effectively using the proven Leitner system. Track your progress, master 1000+ essential words, and build confidence at your own pace."
      />
      
      {/* OpenGraph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Memoranta: Master French Words with Confidence" />
      <meta property="og:description" content="Learn and retain French vocabulary effectively using the proven Leitner system. Track your progress, master 1000+ essential words, and build confidence at your own pace." />
      <meta property="og:image" content="https://www.memoranta.com/assets/logo-5c9ad257.png" />
      <meta property="og:url" content="https://memoranta.com" />
      <meta property="og:site_name" content="Memoranta" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Memoranta: Master French Words with Confidence" />
      <meta name="twitter:description" content="Learn and retain French vocabulary effectively using the proven Leitner system. Track your progress, master 1000+ essential words, and build confidence at your own pace." />
      <meta name="twitter:image" content="https://www.memoranta.com/assets/logo-5c9ad257.png" />
    </Helmet>

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50">
      <div className="max-w-6xl mx-auto px-4 py-12 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Master Words with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-lime-600 ml-3">
              Confidence
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Learn and retain vocabulary effectively using the scientifically-proven Leitner System.
            Track your progress and master new words at your own pace.
          </p>
          
          {/* Decide what to show based on currentUser */}
          {!currentUser ? (
            /* Not logged in => Show "Login" and "Try Demo" buttons */
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Login to Start Learning
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 transform transition-all duration-300 hover:-translate-y-0.5"
              >
                Try Demo
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </Link>
            </div>
          ) : (
            /* Logged in => Show normal "Start Learning" and "Quick Review" */
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/profile"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Start Learning
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/review/1"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 transform transition-all duration-300 hover:-translate-y-0.5"
              >
                Quick Review
              </Link>
            </div>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Spaced Repetition</h3>
            <p className="text-gray-600">Learn efficiently with scientifically proven methods that help you remember words longer.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Progress</h3>
            <p className="text-gray-600">Track your learning journey through 5 boxes, moving words as you master them.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Learn at Your Pace</h3>
            <p className="text-gray-600">Review words when you want, with smart reminders for optimal timing.</p>
          </div>
        </div>

        {/* New section highlighting the current offering */}
        <div className="bg-blue-50/50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-white rounded-full px-4 py-1.5 
                            shadow-sm border border-gray-100 mb-6">
              {wordSets.french.icon()}
              <span className="text-sm font-medium text-gray-700">Currently Available</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Start with 1,000 Essential French Words
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're starting with the most frequently used French vocabulary to help you build a strong foundation. 
              Based on user demand, we plan to expand with more languages and advanced features.
            </p>
            
            <div className="inline-flex items-center justify-center gap-2 text-sm text-gray-500">
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>More languages and features coming soon!</span>
            </div>
          </div>
        </div>


       
        {/* Demo Section Separator */}
        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-6 py-3 text-lg font-medium text-gray-900 bg-gradient-to-r from-blue-50 via-white to-lime-50 rounded-full">
              Try This Demo
            </span>
          </div>
        </div>

        {/* Add Start Tutorial button near the demo section */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleStartTutorial}
            className="px-6 py-3 text-base font-medium rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 
                     transform transition-all duration-300 flex items-center gap-2 group"
          >
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Click to Start the Demo
          </button>
        </div>

        {/* Card Display with Label */}
        <div className="max-w-xl mx-auto px-4 mb-32">
          <div className="text-center mb-4">
          </div>
          <div ref={cardRef} className="mb-8">
            <Card
              wordData={DEMO_WORDS[currentIndex]}
              boxNumber={demoBoxes[DEMO_WORDS[currentIndex].id] || 1}
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
        <div className="max-w-5xl mx-auto px-4 mb-16" ref={boxesRef}>
          <div className="text-center mb-6">
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
              const wordsInBox = DEMO_WORDS.filter((w) => demoBoxes[w.id] === boxNum)

              return (
                <div
                  key={boxNum}
                  className="relative bg-white rounded-xl p-6 shadow border border-gray-100 
                            transition-transform transform hover:-translate-y-1"
                >
                  <div className={`absolute -inset-0.5 rounded-xl 
                    ${status === 'due' ? 'bg-blue-100 animate-pulse' : 
                      status === 'reviewed' ? 'bg-lime-50' : 'bg-gray-100'
                    }
                    opacity-25 pointer-events-none`}
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
                    <div className="h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
                      <div
                        className={`${status === 'due' ? 'bg-blue-400' : status === 'reviewed' ? 'bg-lime-400' : 'bg-gray-300' } 
                                  h-full transition-all duration-500`}
                        style={{ width: `${(count / DEMO_WORDS.length) * 100}%` }}
                      />
                    </div>
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

        {/* After boxes display and before tutorial overlay */}
        <div className="max-w-4xl mx-auto px-4 mt-24">
          {/* CTA Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Improve Your Vocabulary?
            </h2>

            {!currentUser ? (
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Login / Sign Up
              </Link>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/profile"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Get Started Now
                </Link>
                <Link
                  to="/review/1"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 transform transition-all duration-300 hover:-translate-y-0.5"
                >
                  Try a Review Session
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Add Tutorial Overlay */}
        {tutorialStep > 0 && currentStepData && (
          <>
            <div
              ref={tutorialOverlayRef}
              className="fixed inset-0 bg-black/50 z-40"
            />
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
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <div className="relative bg-white rounded-2xl p-6 max-w-md w-full shadow-lg">
                <button
                  onClick={handleTutorialClose}
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition"
                  title="Close"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
    </div>
    </>
  )
}

export default HomePage
