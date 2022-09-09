// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4SKRvN65F6khbqGi7n6GrQ8KdnSQSN7U",
  authDomain: "lookout-noob.firebaseapp.com",
  projectId: "lookout-noob",
  storageBucket: "lookout-noob.appspot.com",
  messagingSenderId: "789554119624",
  appId: "1:789554119624:web:cddf989ac9e6cbcfbc76fd",
  measurementId: "G-22C4PEQ4ZQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

export const dB = getFirestore(app);
