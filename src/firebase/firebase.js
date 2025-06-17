// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY, // :arrows_anticlockwise: Removed quotes to treat it as an environment variable
//   authDomain: "stay-master-ba1e3.firebaseapp.com",
//   projectId: "stay-master-ba1e3",
//   storageBucket: "stay-master-ba1e3.appspot.com",
//   messagingSenderId: "669255422713",
//   appId: "1:669255422713:web:d3fba6920f99c1ff818828",
//   measurementId: "G-BY23SKD2PF"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export { auth }; // named export
// // Optional: you can still export app if needed
// export default app;




// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "stay-master-ba1e3.firebaseapp.com",
//   projectId: "stay-master-ba1e3",
//   storageBucket: "stay-master-ba1e3.appspot.com",
//   messagingSenderId: "669255422713",
//   appId: "1:669255422713:web:d3fba6920f99c1ff818828",
//   measurementId: "G-BY23SKD2PF"
// };
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export { auth };
// export default app;



import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
