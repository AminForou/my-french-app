// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDGsb7CgepFZlTJd1NEO2-RgrpXcCwq2aY",
  authDomain: "my-french-app.firebaseapp.com",
  projectId: "my-french-app",
  storageBucket: "my-french-app.firebasestorage.app",
  messagingSenderId: "976748305651",
  appId: "1:976748305651:web:2fda9e2b0bfa05faf7ab86"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
