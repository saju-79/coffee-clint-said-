// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM_9FFp4O50RYD0gHiaB3Ygh_ZpQdQ7Xc",
  authDomain: "coffee-store-c705d.firebaseapp.com",
  projectId: "coffee-store-c705d",
  storageBucket: "coffee-store-c705d.firebasestorage.app",
  messagingSenderId: "346635098550",
  appId: "1:346635098550:web:642fb6ba7a2b3bebbd0917"
};

// Initialize Firebase
 
const app = initializeApp(firebaseConfig);
 export const auth= getAuth(app);


 