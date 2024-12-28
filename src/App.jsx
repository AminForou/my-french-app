// src/App.jsx
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ReviewPage from './pages/ReviewPage'
import LightnerPage from './pages/LightnerPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import Footer from './components/Footer'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null)
      setAuthLoading(false) // done checking auth
    })
    return () => unsubscribe()
  }, [])

  // Sign out helper
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      setCurrentUser(null)
    } catch (err) {
      console.error('Sign out error:', err)
    }
  }

  // If we're still loading Firebase auth state, show a quick loader or splash
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
          {/* Public routes */}
          <Route path="/" element={<HomePage currentUser={currentUser} />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected routes */}
          <Route
            path="/lightner"
            element={
              <ProtectedRoute user={currentUser}>
                <LightnerPage />
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
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
