// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeJatgbaSZC8gzXNfF8zqRii5mgNFlp5Q",
  authDomain: "ecommerce-app-6b7d9.firebaseapp.com",
  projectId: "ecommerce-app-6b7d9",
  storageBucket: "ecommerce-app-6b7d9.appspot.com",
  messagingSenderId: "538009130522",
  appId: "1:538009130522:web:4de7f918bc6519a0e9e3a3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { firebaseApp, auth, db };