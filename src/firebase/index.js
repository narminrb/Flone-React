import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCjIlSD_eITYsx7EYZCHIfhNLULEmU9NN0",
  authDomain: "lesson6-27929.firebaseapp.com",
  projectId: "lesson6-27929",
  storageBucket: "lesson6-27929.firebasestorage.app",
  messagingSenderId: "575689029930",
  appId: "1:575689029930:web:a96227446eb3b638418653",
  measurementId: "G-E9RW0CS726"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);