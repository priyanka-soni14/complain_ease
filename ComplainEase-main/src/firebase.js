import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAUM-I2RvDpqMoZEA1jRC4IhO-nwGDZjDI",
  authDomain: "dogo-blog-a4059.firebaseapp.com",
  projectId: "dogo-blog-a4059",
  storageBucket: "dogo-blog-a4059.appspot.com",
  messagingSenderId: "62067904852",
  appId: "1:62067904852:web:e455214e00ba8fd115f8c1",
  measurementId: "G-QTTG25MPP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};