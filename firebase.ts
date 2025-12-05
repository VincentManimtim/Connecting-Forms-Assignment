
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiZJC_7UslOeKWQV-Yz5ezbjrl3BhB0UE",
    authDomain: "assignment3-connectingforms.firebaseapp.com",
    projectId: "assignment3-connectingforms",
    storageBucket: "assignment3-connectingforms.firebasestorage.app",
    messagingSenderId: "337124354402",
    appId: "1:337124354402:web:e15369ef0cbba0b964643b",
    measurementId: "G-ZV4H3KHG40"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);