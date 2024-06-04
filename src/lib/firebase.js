import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "devchats-v2.firebaseapp.com",
  projectId: "devchats-v2",
  storageBucket: "devchats-v2.appspot.com",
  messagingSenderId: "1086632065348",
  appId: "1:1086632065348:web:f9d266c90c10a945c67f11",
  measurementId: "G-R2Z0FVTDSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()