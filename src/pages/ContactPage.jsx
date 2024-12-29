import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // POST to our serverless function at /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      // If successful, show thank-you state
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('Error sending message:', err)
      setError('Sorry, something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (

    <>
    <Helmet>
      <title>Connect With Memoranta and Share Your Feedback</title>
      <meta
        name="description"
        content="Have questions or suggestions about learning French with Memoranta? Get in touch with our team. We value your feedback and are here to support your learning journey."
      />
    </Helmet>


    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50">
      <div className="max-w-4xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Get in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-lime-600 ml-3">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have suggestions or found a bug? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg 
                  className="w-8 h-8 text-green-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-600 mb-8">
                Your message has been sent successfully.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl 
                           text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                               transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 
                               focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                               transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             transition-all duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 
                             focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             transition-all duration-200"
                  placeholder="Tell us what you think..."
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl 
                             text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                             transition-all duration-300 ${
                               isSubmitting 
                               ? 'opacity-75 cursor-not-allowed' 
                               : 'hover:-translate-y-0.5 hover:shadow-lg'
                             }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg 
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24"
                      >
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4" 
                        />
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 
                             5.373 0 12h4zm2 5.291A7.962 
                             7.962 0 014 12H0c0 3.042 
                             1.135 5.824 3 7.938l3-2.647z" 
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactPage
