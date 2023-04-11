// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyQ7ZFBpg5NJ8zuF3DRND1fTDpn72-Lfo",
  authDomain: "diploma-cb44b.firebaseapp.com",
  projectId: "diploma-cb44b",
  storageBucket: "diploma-cb44b.appspot.com",
  messagingSenderId: "283827236925",
  appId: "1:283827236925:web:0c56f18466d94a7aa97a54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//получить список категорий (коллекция документов)
export const categoryCollection = collection(db, "categories");
