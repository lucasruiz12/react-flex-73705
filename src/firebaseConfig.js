import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4w26ZtQ6F32YEaKT1xotM4F49VoUGm-c",
    authDomain: "react-73705.firebaseapp.com",
    projectId: "react-73705",
    storageBucket: "react-73705.firebasestorage.app",
    messagingSenderId: "776419515667",
    appId: "1:776419515667:web:1b1f336e0e454326964ee6"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);