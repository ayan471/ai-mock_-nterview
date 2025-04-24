// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB60Qk8s4Vv56s4sL9BUQeJBAnib30l2BE",
  authDomain: "prepwise-d3c26.firebaseapp.com",
  projectId: "prepwise-d3c26",
  storageBucket: "prepwise-d3c26.firebasestorage.app",
  messagingSenderId: "876683235242",
  appId: "1:876683235242:web:203f95067c1f2ef10e65d3",
  measurementId: "G-XTL5WTJG31",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
