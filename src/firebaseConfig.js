// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYO4T0PyaunjZBF2a2tHrfp77gM7qC06U",
  authDomain: "blog-fe842.firebaseapp.com",
  projectId: "blog-fe842",
  storageBucket: "blog-fe842.appspot.com",
  messagingSenderId: "90338099077",
  appId: "1:90338099077:web:6a98481531d7ed0f050eec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
