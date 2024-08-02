import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.js'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2gmpXpLIQvsnbiR4odf80J-dCM9V6_XY",
  authDomain: "flowfitness-101ac.firebaseapp.com",
  projectId: "flowfitness-101ac",
  storageBucket: "flowfitness-101ac.appspot.com",
  messagingSenderId: "724680133194",
  appId: "1:724680133194:web:4c4c80f1e0bcb031d874b3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
