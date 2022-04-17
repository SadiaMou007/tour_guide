// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1XOS7_plT75fKCsDtQbvk4FdBrWLly44",
  authDomain: "travel-world-97d79.firebaseapp.com",
  projectId: "travel-world-97d79",
  storageBucket: "travel-world-97d79.appspot.com",
  messagingSenderId: "942531113174",
  appId: "1:942531113174:web:dda93bfac277ba506bd977",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
