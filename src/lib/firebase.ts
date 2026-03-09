import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBQM8Tca13jW8p1WP2ekcOKCGOVhXqHUk0",
    authDomain: "mmportfolio-1bd8b.firebaseapp.com",
    databaseURL: "https://mmportfolio-1bd8b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mmportfolio-1bd8b",
    storageBucket: "mmportfolio-1bd8b.firebasestorage.app",
    messagingSenderId: "424198576202",
    appId: "1:424198576202:web:ff51a4355d5c66f51faeb3",
    measurementId: "G-N82976EQTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getDatabase(app);

export { app, analytics, db };
