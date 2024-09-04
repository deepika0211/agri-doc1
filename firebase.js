import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getDatabase } from "firebase/database"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import necessary Firebase Storage methods

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF61sm3xpw13h_qcj1WUexdklzOEQkyzs",
  authDomain: "zampa-5221f.firebaseapp.com",
  projectId: "zampa-5221f",
  storageBucket: "zampa-5221f.appspot.com",
  messagingSenderId: "939314559177",
  appId: "1:939314559177:web:fff6168b72842e31b3f518",
  measurementId: "G-PB38BJ7460"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Firebase Realtime Database
const database = getDatabase(app);

// Initialize Firebase Storage
const storage = getStorage(app);

// Function to handle file uploads (example)
const uploadFile = async (file) => {
  try {
    const storageRef = ref(storage, `images/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('File available at', downloadURL);
    return downloadURL;
  } catch (error) {
    console.error('Upload failed:', error);
    // Handle error based on error code or message
  }
};

// Export auth, database, and storage for use in other parts of the app
export { auth, database, storage, uploadFile };
