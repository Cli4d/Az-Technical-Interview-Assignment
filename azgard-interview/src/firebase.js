// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//import firebase auth
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7SDGIgxzYK5sQiQdrjtA38IHc30sWzBk",
  authDomain: "azgard-technical-interview.firebaseapp.com",
  projectId: "azgard-technical-interview",
  storageBucket: "azgard-technical-interview.appspot.com",
  messagingSenderId: "647729988894",
  appId: "1:647729988894:web:8a0024a7b5a5090256350f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }