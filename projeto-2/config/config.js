// Import the functions you need from the SDKs you need
import firebase from "firebase";0
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyfAYyJvkc506X29AMRswXr_RuLCUjycw",
  authDomain: "projeto-2---cc4670.firebaseapp.com",
  databaseURL: "https://projeto-2---cc4670-default-rtdb.firebaseio.com",
  projectId: "projeto-2---cc4670",
  storageBucket: "projeto-2---cc4670.appspot.com",
  messagingSenderId: "231110881670",
  appId: "1:231110881670:web:18a1e776476eaec8b6fc07",
  measurementId: "G-FSVP0B2XBC"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;