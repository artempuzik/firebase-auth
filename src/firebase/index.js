import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const ENV = import.meta.env

const firebaseConfig = {
    apiKey: ENV.VITE_API_KEY,
    authDomain: ENV.VITE_AUTH_DOMAIN,
    projectId: ENV.VITE_PROJECT_ID,
    storageBucket: ENV.VITE_STORAGE_BUCKET,
    messagingSenderId: ENV.MESSAGE_SENDER_ID,
    appId: ENV.VITE_APP_ID,
    measurementId: ENV.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { auth, provider, signInWithPopup, signOut, db };
