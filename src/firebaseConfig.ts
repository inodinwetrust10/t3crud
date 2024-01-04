// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAN-35bQriG7ZRZMfygskbrDc-Nfd46aY",
  authDomain: "crud-ebacf.firebaseapp.com",
  projectId: "crud-ebacf",
  storageBucket: "crud-ebacf.appspot.com",
  messagingSenderId: "290148361480",
  appId: "1:290148361480:web:2e910aa29dfeebe54cf8bd",
  measurementId: "G-M46R0VFVB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { auth, app, firestore };
