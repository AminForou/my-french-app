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

import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from './firebase'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user || null)
    })
    return () => unsubscribe()
  }, [])

  // A helper to sign out
  const handleSignOut = async () => {
    try {
      await signOut(auth)
      setCurrentUser(null) 
    } catch (err) {
      console.error('Sign out error:', err)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Pass currentUser & handleSignOut to Navbar */}
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

      <footer className="bg-gray-200 text-gray-700 text-sm px-6 py-4 text-center">
        © 2024 My Company — All Rights Reserved.
      </footer>
    </div>
  )
}

export default App
