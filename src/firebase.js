// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAPIpDc0rWz4o5r1Jz8PzCr_wOtJF_KHY4",
    authDomain: "challenge-d6ab9.firebaseapp.com",
    projectId: "challenge-d6ab9",
    storageBucket: "challenge-d6ab9.appspot.com",
    messagingSenderId: "702094884806",
    appId: "1:702094884806:web:325df51f660a767a08bcc7",
    measurementId: "G-S0QB06H9RF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};