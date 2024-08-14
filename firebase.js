// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGyNU8Ew_qT1Jdh71RKeTnvUULAgvgtvs",
  authDomain: "subscriptionlist-9025c.firebaseapp.com",
  projectId: "subscriptionlist-9025c",
  storageBucket: "subscriptionlist-9025c.appspot.com",
  messagingSenderId: "725039862458",
  appId: "1:725039862458:web:780d6e71550ba1ce056883",
  measurementId: "G-7YZZ9RRW8Y"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app)



export {app,  db} ;