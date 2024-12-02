// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9culXS6ZNT2tVZlLiYMQQB4Fwu7gFZDA",
  authDomain: "coffee-master-auth-b46bb.firebaseapp.com",
  projectId: "coffee-master-auth-b46bb",
  storageBucket: "coffee-master-auth-b46bb.firebasestorage.app",
  messagingSenderId: "763249137413",
  appId: "1:763249137413:web:1b247ad9fd74cfb22e896c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;