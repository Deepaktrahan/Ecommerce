// Firebase modular imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBsPYqGc-XDTZ5yMnu-EZ77l64j6xZITY",
  authDomain: "ecommerce-82501.firebaseapp.com",
  projectId: "ecommerce-82501",
  storageBucket: "ecommerce-82501.appspot.com",
  messagingSenderId: "810530835818",
  appId: "1:810530835818:web:bc97fb15b207d6f059e913",
  measurementId: "G-L7J9BG38MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const fs = getFirestore(app);
const storage = getStorage(app);

export { auth, fs, storage };
