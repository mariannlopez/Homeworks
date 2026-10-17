// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQV7nbq90-txdlCbsvDr-b4uIk_PgAnww",
  authDomain: "challenge9-3130a.firebaseapp.com",
  projectId: "challenge9-3130a",
  storageBucket: "challenge9-3130a.firebasestorage.app",
  messagingSenderId: "20187575854",
  appId: "1:20187575854:web:0cca6a6d52a4807c2451bf",
  measurementId: "G-VZDC6GRQZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };