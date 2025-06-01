// Import the functions you need from the SDKs you need
import firebase  from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVJflVyfuPaDJ4OortXFD69lVHlCCDONw",
  authDomain: "clone-9d14e.firebaseapp.com",
  projectId: "clone-9d14e",
  storageBucket: "clone-9d14e.firebasestorage.app",
  messagingSenderId: "72056634288",
  appId: "1:72056634288:web:3c83d56acfccec6425b475"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db =app.firestore();