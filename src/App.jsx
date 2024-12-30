// src/App.jsx
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReviewPage from './pages/ReviewPage'
import LeitnerPage from './pages/LeitnerPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import Footer from './components/Footer'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FlaggedCardsPage from './pages/FlaggedCardsPage'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null)
      setAuthLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    try {
      await signOut(auth)
      setCurrentUser(null)
    } catch (err) {
      console.error('Sign out error:', err)
    }
  }

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentUser={currentUser} onSignOut={handleSignOut} />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage currentUser={currentUser} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Protected Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={currentUser}>
                <LeitnerPage currentUser={currentUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/review"
            element={
              <ProtectedRoute user={currentUser}>
                <ReviewPage currentUser={currentUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/review/:boxId"
            element={
              <ProtectedRoute user={currentUser}>
                <ReviewPage currentUser={currentUser} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/flags"
            element={
              <ProtectedRoute user={currentUser}>
                <FlaggedCardsPage currentUser={currentUser} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
