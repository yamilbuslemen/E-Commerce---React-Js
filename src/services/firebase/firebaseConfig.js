import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA2iKt8yJZiuWbZfr8HEB5oGO-4qvmRsYE",
  authDomain: "eccomerce-reactjs-a473a.firebaseapp.com",
  projectId: "eccomerce-reactjs-a473a",
  storageBucket: "eccomerce-reactjs-a473a.appspot.com",
  messagingSenderId: "93153644016",
  appId: "1:93153644016:web:46998e1db4249ca9c1a135",
  measurementId: "G-37B1DE4CWG"
}

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)