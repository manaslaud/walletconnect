// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "web3-auth-50e10.firebaseapp.com",
  projectId: "web3-auth-50e10",
  storageBucket: "web3-auth-50e10.appspot.com",
  messagingSenderId: "638110540546",
  appId:import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: "G-F9S9F45DBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const database=getDatabase(app)
export {app,auth,database}