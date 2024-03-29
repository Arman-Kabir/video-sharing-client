// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTi90ybOTkAZ558Jq-9xnKybBFyu9ruvs",
    authDomain: "video-sharing-ae301.firebaseapp.com",
    projectId: "video-sharing-ae301",
    storageBucket: "video-sharing-ae301.appspot.com",
    messagingSenderId: "66601647884",
    appId: "1:66601647884:web:9c42a97c68720f810d9329"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();