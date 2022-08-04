// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjWOx28Y_u6r0eNYmxNikD80VeCwM1yoA",
  authDomain: "english-web-app-f6c4b.firebaseapp.com",
  projectId: "english-web-app-f6c4b",
  storageBucket: "english-web-app-f6c4b.appspot.com",
  messagingSenderId: "304499305221",
  appId: "1:304499305221:web:fc721762e33c52e2f7a56c",
  measurementId: "G-4W6857921G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
