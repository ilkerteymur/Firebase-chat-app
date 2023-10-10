// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5BUvPtGfrzP9CJqjuNyB3ny3Wkb-2bwY",
  authDomain: "chat-2e34c.firebaseapp.com",
  projectId: "chat-2e34c",
  storageBucket: "chat-2e34c.appspot.com",
  messagingSenderId: "283605564555",
  appId: "1:283605564555:web:989036f8359e17247a288e",
  measurementId: "G-MWNTNWRSPP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// yetkilendirmeyi aktif eder
export const auth = getAuth(app);

// google yetkilendirmesi için kurulum
export const provider = new GoogleAuthProvider();
