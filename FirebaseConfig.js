// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtJV2Pfwbzg-aSSWDulUlg-f8qbnrqf8g",
  authDomain: "ruthine-1c6d0.firebaseapp.com",
  projectId: "ruthine-1c6d0",
  storageBucket: "ruthine-1c6d0.firebasestorage.app",
  messagingSenderId: "829947744221",
  appId: "1:829947744221:web:bed84b2248f9945766b034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize authentication
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {provider, auth}