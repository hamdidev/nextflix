// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCz7kFFeX8CyHM4lHg64FwsfTFQDzmKn0c',
  authDomain: 'nextflix-8d2f6.firebaseapp.com',
  projectId: 'nextflix-8d2f6',
  storageBucket: 'nextflix-8d2f6.appspot.com',
  messagingSenderId: '495197923419',
  appId: '1:495197923419:web:12087897ce96685ec4777e',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
