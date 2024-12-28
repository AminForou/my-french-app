// src/components/ProtectedRoute.jsx
import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ user, children }) {
  if (!user) {
    // Not logged in => redirect to /login
    return <Navigate to="/login" replace />
  }
  return children
}

export default ProtectedRoute
