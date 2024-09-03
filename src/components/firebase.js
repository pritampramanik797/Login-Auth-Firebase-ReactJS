// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1djjWzx9NIVQB-Zt_1-DdJjzwOpf9jSc",
  authDomain: "authentication-f4ff7.firebaseapp.com",
  projectId: "authentication-f4ff7",
  storageBucket: "authentication-f4ff7.appspot.com",
  messagingSenderId: "540731428816",
  appId: "1:540731428816:web:8913fbe08d1daf06c7f3d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;