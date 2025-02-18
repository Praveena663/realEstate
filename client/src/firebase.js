// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2069f.firebaseapp.com",
  projectId: "mern-estate-2069f",
  storageBucket: "mern-estate-2069f.firebasestorage.app",
  messagingSenderId: "235813439651",
  appId: "1:235813439651:web:0f4162b9c38be71b691716"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);