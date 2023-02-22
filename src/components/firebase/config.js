// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


export const firebaseConfig = {
  apiKey: "AIzaSyBON-B1o2-ptPhegKNVGsRLKTFB-M928Wk",
  authDomain: "online-shopping-adda-23cd4.firebaseapp.com",
  projectId: "online-shopping-adda-23cd4",
  storageBucket: "online-shopping-adda-23cd4.appspot.com",
  messagingSenderId: "919259266221",
  appId: "1:919259266221:web:fe0402e4aabd9267af9a24",
  measurementId: "G-CZ6R01QT21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;