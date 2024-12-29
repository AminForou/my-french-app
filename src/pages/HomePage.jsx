// src/pages/HomePage.js
import React from 'react'
import { Link } from 'react-router-dom'
import { wordSets } from '../data/words'

function HomePage({ currentUser }) {
  return (
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
            /* Not logged in => Show a "Login" button */
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
            </div>
          ) : (
            /* Logged in => Show normal "Start Learning" and "Quick Review" */
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/progress"
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

        {/* Stats Section with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: '1000+', label: 'French Words' },
            { number: '5', label: 'Learning Boxes' },
            { number: '100%', label: 'Free' },
            { number: '24/7', label: 'Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center transform transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-lime-600 text-transparent bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

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
                to="/progress"
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
    </div>
  )
}

export default HomePage
