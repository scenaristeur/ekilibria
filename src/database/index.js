import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// const config =
//   import.meta.env.MODE === 'development'
//     ? JSON.parse(import.meta.env.VITE_APP_FIREBASE_CONFIG)
//     : JSON.parse(import.meta.env.VITE_APP_FIREBASE_CONFIG_PUBLIC)

// config.projectId = JSON.parse(import.meta.env.VITE_APP_FIREBASE_PROJECT_ID)
var config = {
  apiKey: '<API_KEY>',
  authDomain: '<PROJECT_ID>.firebaseapp.com',
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
  projectId: '<PROJECT_ID>',
  storageBucket: '<BUCKET>.appspot.com',
  messagingSenderId: '<SENDER_ID>'
}
initializeApp(config)

export const firestoreDb = getFirestore()
export const realtimeDb = getDatabase()
export const storage = getStorage()
