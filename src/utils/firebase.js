// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8nen_93VkMgGAMT-BBRGv6AZbNk69pS0",
  authDomain: "netflixgpt-12d94.firebaseapp.com",
  projectId: "netflixgpt-12d94",
  storageBucket: "netflixgpt-12d94.firebasestorage.app",
  messagingSenderId: "1081733795168",
  appId: "1:1081733795168:web:d2c0388fab342ba1cba205",
  measurementId: "G-TF4QK704B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();