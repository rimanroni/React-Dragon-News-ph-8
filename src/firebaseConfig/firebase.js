// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYR2BwnplivD38jN7t5iuICzhfWXqbhHQ",
  authDomain: "react-dragon-news-15ece.firebaseapp.com",
  projectId: "react-dragon-news-15ece",
  storageBucket: "react-dragon-news-15ece.appspot.com",
  messagingSenderId: "848217472690",
  appId: "1:848217472690:web:8d2883234f8c9d6cafd3ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)