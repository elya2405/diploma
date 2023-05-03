// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

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
export const db = getFirestore(app);
const auth = getAuth(app);

//получить список категорий (коллекция документов)
export const categoryCollection = collection(db, "categories");
export const productCollection = collection(db, "products");
export const orderCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onProductsLoad = (callback) =>
  onSnapshot(productCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(orderCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
