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
    console.log('[LOG] Subscribing to onAuthStateChanged...') // [LOG]
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('[LOG] User is signed in:', user.uid) // [LOG]
      } else {
        console.log('[LOG] No user is signed in.') // [LOG]
      }
      setCurrentUser(user || null)
      setAuthLoading(false)
    })
    return () => {
      console.log('[LOG] Unsubscribing onAuthStateChanged...') // [LOG]
      unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    console.log('[LOG] User requesting sign out...') // [LOG]
    try {
      await signOut(auth)
      setCurrentUser(null)
      console.log('[LOG] Sign out successful!') // [LOG]
    } catch (err) {
      console.error('Sign out error:', err)
    }
  }

  if (authLoading) {
    console.log('[LOG] Auth is loading; showing spinner...') // [LOG]
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  console.log('[LOG] Rendering main App with currentUser:', currentUser?.uid) // [LOG]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentUser={currentUser} onSignOut={handleSignOut} />
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage currentUser={currentUser} />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected Routes */}
          <Route
            path="/lightner"
            element={
              <ProtectedRoute user={currentUser}>
                <LightnerPage currentUser={currentUser} />
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
