// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY,",
  authDomain: "stay-master-ba1e3.firebaseapp.com",
  projectId: "stay-master-ba1e3",
  storageBucket: "stay-master-ba1e3.appspot.com",
  messagingSenderId: "669255422713",
  appId: "1:669255422713:web:d3fba6920f99c1ff818828",
  measurementId: "G-BY23SKD2PF"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
