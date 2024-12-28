// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy0yacjvFp1MzrVFoKSo37DVGf7zH8zNc",
  authDomain: "myecom-bd24c.firebaseapp.com",
  projectId: "myecom-bd24c",
  storageBucket: "myecom-bd24c.firebasestorage.app",
  messagingSenderId: "539588636531",
  appId: "1:539588636531:web:9926c530302f7b841f5f06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }