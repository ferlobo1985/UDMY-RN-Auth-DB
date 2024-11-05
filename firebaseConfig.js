import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyA3iuDlkSsOzZBzeDnR-avUtX-T27Vb9Dc",
    authDomain: "rn-auth-a0be4.firebaseapp.com",
    projectId: "rn-auth-a0be4",
    storageBucket: "rn-auth-a0be4.firebasestorage.app",
    messagingSenderId: "294330837985",
    appId: "1:294330837985:web:5704b968cf58d60d37c0a0",
    measurementId: "G-3H1T7V6Z56"
};

const app = initializeApp(firebaseConfig);
const AUTH = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export  { AUTH }