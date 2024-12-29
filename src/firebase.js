// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// [LOG] Starting Firebase initialization
console.log('Initializing Firebase...')

const firebaseConfig = {
  apiKey: "AIzaSyDGsb7CgepFZlTJd1NEO2-RgrpXcCwq2aY",
  authDomain: "my-french-app.firebaseapp.com",
  projectId: "my-french-app",
  storageBucket: "my-french-app.firebasestorage.app",
  messagingSenderId: "976748305651",
  appId: "1:976748305651:web:2fda9e2b0bfa05faf7ab86"
}

const app = initializeApp(firebaseConfig)
console.log('Firebase App initialized:', app.name) // [LOG]

export const auth = getAuth(app)
console.log('Firebase Auth ready:', auth) // [LOG]

export const db = getFirestore(app)
console.log('Firestore ready:', db) // [LOG]
