import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { 
  getFirestore, 
  initializeFirestore,
  persistentLocalCache,
  persistentSingleTabManager
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDGsb7CgepFZlTJd1NEO2-RgrpXcCwq2aY",
    authDomain: "my-french-app.firebaseapp.com",
    projectId: "my-french-app",
    storageBucket: "my-french-app.firebasestorage.app",
    messagingSenderId: "976748305651",
    appId: "1:976748305651:web:2fda9e2b0bfa05faf7ab86"
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Services
export const auth = getAuth(app)
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache(/*settings*/ {
    tabManager: persistentSingleTabManager()
  })
})