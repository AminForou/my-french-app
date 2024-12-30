// src/pages/LoginPage.jsx
import React, { useState } from 'react'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail 
} from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { words } from '../data/words'

function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  // Create default leitnerBoxes for new users
  function getDefaultLeitnerBoxes() {
    const init = {}
    words.forEach((w) => {
      init[w.id] = 1
    })
    return init
  }

  // Handle Email/Password Submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccessMsg('')

    try {
      if (isRegistering) {
        // 1) Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        // 2) Build default data for new user doc
        const defaultBoxes = getDefaultLeitnerBoxes()
        const userRef = doc(db, 'users', user.uid)

        // Add achievements: {} here
        await setDoc(
          userRef, 
          {
            firstName: firstName || '', 
            leitnerBoxes: defaultBoxes,
            totalTimeSpent: 0,
            streak: 0,
            lastStudyDate: '',
            achievements: {} // (NEW - achievements)
          }, 
          { merge: true }
        )

        setSuccessMsg(`Welcome, ${firstName || user.email}!`)
        setTimeout(() => navigate('/'), 1500)
      } else {
        // Sign in existing user
        await signInWithEmailAndPassword(auth, email, password)

        // (NEW - achievements) - We check if user doc is missing achievements,
        // and if so, we add it. Also ensures old users get this field.
        const user = auth.currentUser
        if (user) {
          const userRef = doc(db, 'users', user.uid)
          const docSnap = await getDoc(userRef)
          if (docSnap.exists()) {
            const data = docSnap.data()
            if (!data.achievements) {
              await setDoc(
                userRef,
                { achievements: {} },
                { merge: true }
              )
            }
          }
        }

        navigate('/profile')
      }
    } catch (err) {
      console.error(err)
      setError(err.message)
    }
  }

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    setError('')
    setSuccessMsg('')
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user

      // Check if doc exists; if not, create with defaultBoxes + fields
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        const defaultBoxes = getDefaultLeitnerBoxes()
        await setDoc(docRef, {
          firstName: user.displayName?.split(' ')[0] || '',
          leitnerBoxes: defaultBoxes,
          totalTimeSpent: 0,
          streak: 0,
          lastStudyDate: '',
          achievements: {}  // (NEW - achievements)
        })
      } else {
        // (NEW - achievements) If user doc exists but lacks achievements, add it
        const data = docSnap.data()
        if (!data.achievements) {
          await setDoc(
            docRef,
            { achievements: {} },
            { merge: true }
          )
        }
      }

      // Signed in => go home
      navigate('/profile')
    } catch (err) {
      console.error(err)
      setError(err.message)
    }
  }

  // Handle Reset Password
  const handleResetPassword = async () => {
    if (!email) {
      setError('Please enter your email address above first.')
      return
    }
    try {
      await sendPasswordResetEmail(auth, email)
      setSuccessMsg('Password reset email sent. Check your inbox!')
    } catch (err) {
      console.error(err)
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-lime-50 flex items-center justify-center px-4 py-32">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-lime-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 7a2 2 0 012 2m4 0a6 
                     6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 
                     1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 
                     6 0 1121 9z" 
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {isRegistering ? 'Create Your Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isRegistering 
                ? 'Start your journey to master French vocabulary'
                : 'Continue your learning progress'}
            </p>
          </div>

          {successMsg && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                {successMsg}
              </div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 9v2m0 4h.01m-6.938 
                       4h13.856c1.54 0 2.502-1.667 
                       1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 
                       0L3.34 16c-.77 1.333.192 3 
                       1.732 3z" 
                  />
                </svg>
                {error}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {isRegistering && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. John"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 
                             focus:border-transparent transition-all duration-300"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           focus:border-transparent transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between">
                <span>{isRegistering ? 'Create a Password' : 'Password'}</span>
                {/* Forgot Password link if not registering */}
                {!isRegistering && (
                  <button 
                    type="button"
                    onClick={handleResetPassword}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Forgot Password?
                  </button>
                )}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={isRegistering ? 'Create a secure password' : 'Enter your password'}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 
                             focus:border-transparent transition-all duration-300 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 
                             hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    // Eye slash icon (hide password)
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.98 8.223A10.477 
                           10.477 0 001.934 12C3.226 16.338 
                           7.244 19.5 12 19.5c.993 0 1.953-.138 
                           2.863-.395M6.228 6.228A10.45 
                           10.45 0 0112 4.5c4.756 0 
                           8.773 3.007 9.963 7.178.07.207.07.431 
                           0 .639C20.577 16.49 16.64 19.5 
                           12 19.5c-4.756 0-8.773-3.007-9.963-7.178z 
                           M6.228 6.228L3 3m3.228 3.228l3.65 
                           3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65
                           m0 0a3 3 0 10-4.243-4.243m4.242 
                           4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    // Eye icon (show password)
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.036 12.322a1.012 
                           1.012 0 010-.639C3.423 
                           7.51 7.36 4.5 12 4.5c4.638 
                           0 8.573 3.007 9.963 7.178.07.207.07.431 
                           0 .639C20.577 16.49 16.64 19.5 
                           12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" 
                      />
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 12a3 3 0 
                           11-6 0 3 3 0 016 0z" 
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                         text-white font-medium py-2.5 rounded-xl transition-all duration-300 transform 
                         hover:-translate-y-0.5 hover:shadow-lg"
            >
              {isRegistering ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          {/* Google Sign In button */}
          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center gap-2 bg-white 
                         border border-gray-300 hover:bg-gray-50 text-sm font-medium px-4 py-2 
                         rounded-xl transition-all duration-300 mt-2"
            >
              <img 
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                alt="Google" 
                className="w-5 h-5" 
              />
              Sign {isRegistering ? 'Up' : 'In'} with Google
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-600 text-center">
              {isRegistering
                ? 'Already have an account?'
                : "Don't have an account yet?"}
            </p>
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="w-full text-blue-600 hover:text-blue-800 font-medium mt-2 py-2 
                         transition-colors duration-300"
            >
              {isRegistering ? 'Sign in to your account' : 'Create a free account'}
            </button>
          </div>
        </div>

        {isRegistering && (
          <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 space-y-4">
            <h3 className="font-medium text-gray-900">What you'll get:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                Track your learning progress across boxes
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                Personalized review sessions
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                Learn at your own pace with the Leitner system
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginPage
