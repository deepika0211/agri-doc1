import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database"; // Import the Realtime Database

// New Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF61sm3xpw13h_qcj1WUexdklzOEQkyzs",
  authDomain: "zampa-5221f.firebaseapp.com",
  projectId: "zampa-5221f",
  storageBucket: "zampa-5221f.appspot.com",
  messagingSenderId: "939314559177",
  appId: "1:939314559177:web:fff6168b72842e31b3f518",
  measurementId: "G-PB38BJ7460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Realtime Database
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const database = getDatabase(app); // Initialize the Realtime Database

export { auth, database }; // Export both auth and database
