// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8eujse1YyOpuOoR919DyydkTwCbqPZJg",
  authDomain: "parcial-845f1.firebaseapp.com",
  projectId: "parcial-845f1",
  storageBucket: "parcial-845f1.firebasestorage.app",
  messagingSenderId: "520195871594",
  appId: "1:520195871594:web:37517cc2c1f3b966d48b13",
  measurementId: "G-93DXJ5Q9J8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)