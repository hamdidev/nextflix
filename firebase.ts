// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJRyduXeCVX6HoYz9_PBOXKhIYc-mvhC8',
  authDomain: 'nextflix-56777.firebaseapp.com',
  projectId: 'nextflix-56777',
  storageBucket: 'nextflix-56777.appspot.com',
  messagingSenderId: '508439896030',
  appId: '1:508439896030:web:6619eca0220b503e73874f',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
