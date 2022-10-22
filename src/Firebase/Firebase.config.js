// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsp7AH_rjYSTLZBTW_EplgeUfVrQ8KLPA",
  authDomain: "new-protal-auth.firebaseapp.com",
  projectId: "new-protal-auth",
  storageBucket: "new-protal-auth.appspot.com",
  messagingSenderId: "732043175808",
  appId: "1:732043175808:web:83e0b90ffe23dd4cd6c365"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;