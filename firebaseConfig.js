// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUNtsAQzjomZvInVy6twGoCCKQo2ND2vA",
  authDomain: "snek-35a2a.firebaseapp.com",
  projectId: "snek-35a2a",
  storageBucket: "snek-35a2a.appspot.com",
  messagingSenderId: "818780621907",
  appId: "1:818780621907:web:0843b6a7765656c5370aa6",
  measurementId: "G-ZEM96GVDD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);