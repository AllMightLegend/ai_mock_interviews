// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtJZTDdYUsSTEHZIZoFaidiWA4DoWEFms",
  authDomain: "interviewai-44f9c.firebaseapp.com",
  projectId: "interviewai-44f9c",
  storageBucket: "interviewai-44f9c.firebasestorage.app",
  messagingSenderId: "764002374854",
  appId: "1:764002374854:web:71b3c9c560c6a848c7b3c7",
  measurementId: "G-8XWNKJDEBG",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
