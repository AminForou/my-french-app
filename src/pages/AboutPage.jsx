import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50">
      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Learning French,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-lime-600 block mt-2">
              One Word at a Time
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A personal journey of combining Duolingo's consistency with the power of the Leitner system
          </p>
        </div>

        {/* Story Content */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          {/* Story Paragraphs */}
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              As someone passionate about learning French, I've been consistently using Duolingo for over 900 days. 
              While the journey has been rewarding, I realized I needed a more focused approach to vocabulary building.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-xl text-gray-700">
              "The Leitner system had helped me master complex topics before. Why not apply it to language learning?"
            </blockquote>

            <p className="text-lg text-gray-600 leading-relaxed">
              Having successfully used the Leitner system in the past for various subjects, I remembered its effectiveness 
              in helping me retain information long-term. This sparked an idea: why not combine the power of spaced repetition 
              with a curated list of the 1,000 most essential French words?
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Unable to find a platform that matched this specific need, I decided to create one myself. This website 
              is the result - a focused tool that combines spaced repetition, pronunciation guides, and carefully selected 
              vocabulary to help accelerate French language learning.
            </p>
          </div>

          {/* Connect Section */}
          <div className="border-t border-gray-100 mt-12 pt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have suggestions for improving this learning tool? I'd love to hear your thoughts!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://x.com/aminfseo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl text-white bg-black hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow on X
              </a>
              <a
                href="https://www.linkedin.com/in/ma-foroutan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl text-white bg-[#0A66C2] hover:bg-[#094ea0] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                Contact Page
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 