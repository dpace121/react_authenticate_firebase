// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClwsDl3c2XyMf2ihSE8eFyKnSoz1vZsNg",
  authDomain: "authentication-6bebd.firebaseapp.com",
  projectId: "authentication-6bebd",
  storageBucket: "authentication-6bebd.firebasestorage.app",
  messagingSenderId: "265825635467",
  appId: "1:265825635467:web:78a04477de82976379188e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth();
export const db = getFirestore(app);
export default app;
