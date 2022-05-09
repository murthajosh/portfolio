// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPlPMchgE7RM_XzLa1uYjW1gcbvkaFfgw",
  authDomain: "murthadev.firebaseapp.com",
  projectId: "murthadev",
  storageBucket: "murthadev.appspot.com",
  messagingSenderId: "757165677669",
  appId: "1:757165677669:web:e2b7fb2dfc871f2dabfa8c",
  measurementId: "G-9N8Q1BKD03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);