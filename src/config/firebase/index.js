import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqDVdbErcnIhMvVjyXszLLzYRv4LOBP-w",
    authDomain: "simple-note-firebase-3428d.firebaseapp.com",
    databaseURL: "https://simple-note-firebase-3428d.firebaseio.com",
    projectId: "simple-note-firebase-3428d",
    storageBucket: "simple-note-firebase-3428d.appspot.com",
    messagingSenderId: "904166192341",
    appId: "1:904166192341:web:aa88b6173d99268cc6de5c",
    measurementId: "G-Y2XZ1KNMX1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();
  export default firebase;