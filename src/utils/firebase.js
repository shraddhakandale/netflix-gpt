// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZRvT6nb9fF2nfYhYIfgmDUq-agZNDw-w",
  authDomain: "netflixgpt-78144.firebaseapp.com",
  projectId: "netflixgpt-78144",
  storageBucket: "netflixgpt-78144.firebasestorage.app",
  messagingSenderId: "758084621972",
  appId: "1:758084621972:web:07a8b959dbcde32b260681",
  measurementId: "G-YHXEWTSFFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();