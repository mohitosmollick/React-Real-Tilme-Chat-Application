
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBoPPpEIaLLIyJcH8C2If_Mdv5_s27KK8A",
  authDomain: "react-chat-application-b9377.firebaseapp.com",
  projectId: "react-chat-application-b9377",
  storageBucket: "react-chat-application-b9377.appspot.com",
  messagingSenderId: "279001460613",
  appId: "1:279001460613:web:dd963443e8964e80d2deec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
