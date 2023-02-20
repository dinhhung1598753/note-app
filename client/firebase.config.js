// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwtv9IUiAo2E1SyXBbU3Tl0ikyHObJu3Y",
  authDomain: "note-app-c010e.firebaseapp.com",
  projectId: "note-app-c010e",
  storageBucket: "note-app-c010e.appspot.com",
  messagingSenderId: "357273995377",
  appId: "1:357273995377:web:418e09cf904348075f73d0",
  measurementId: "G-LWN34NDTTT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
