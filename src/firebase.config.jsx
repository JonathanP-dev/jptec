// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKEMFPriYQd_xc88n_Nl4Ptgjlb4Gc3nw",
  authDomain: "jptec-cdfa0.firebaseapp.com",
  projectId: "jptec-cdfa0",
  storageBucket: "jptec-cdfa0.appspot.com",
  messagingSenderId: "754493953287",
  appId: "1:754493953287:web:ec5613d79ac7c6632921a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)