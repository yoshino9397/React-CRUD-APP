import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "crud-1c2c4.firebaseapp.com",
  projectId: "crud-1c2c4",
  storageBucket: "crud-1c2c4.appspot.com",
  messagingSenderId: "546166603178",
  appId: "1:546166603178:web:89203ae3196b2ccfffffd3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
