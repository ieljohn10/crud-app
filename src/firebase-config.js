// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFireStore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPBBx4F1G7rjgp2_89l3nJuBsM-50ZfaI",
  authDomain: "crud-app-b5fc1.firebaseapp.com",
  projectId: "crud-app-b5fc1",
  storageBucket: "crud-app-b5fc1.appspot.com",
  messagingSenderId: "673035401389",
  appId: "1:673035401389:web:9a1c4ddf1610ad6ac12e24",
  measurementId: "G-4HV63C8H7J",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFireStore(app)
