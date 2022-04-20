import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCLqKb3nWj3_zNGWsTuXsluNQzc9PneN1c",
  authDomain: "coffee-shop-da503.firebaseapp.com",
  projectId: "coffee-shop-da503",
  storageBucket: "coffee-shop-da503.appspot.com",
  messagingSenderId: "1040550325034",
  appId: "1:1040550325034:web:82387908f553d0beb78c53",
  measurementId: "G-ZZCVZCDRNV",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
