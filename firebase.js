
// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'; // Import initializeAuth
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCwzphVjjfH2BOzTn_qvysJpSJACsVyOow",
  authDomain: "myauthapp-b63ee.firebaseapp.com",
  projectId: "myauthapp-b63ee",
  storageBucket: "myauthapp-b63ee.firebasestorage.app",
  messagingSenderId: "607357825137",
  appId: "1:607357825137:web:d02a0562c1124a337a6bd0"
};


const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});


const firestore = getFirestore(app);


export { auth, firestore };
