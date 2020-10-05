import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCcetgUXDgJkGCEc5PRTJPLs5OCwdT_y4",
  authDomain: "clone-3fe83.firebaseapp.com",
  databaseURL: "https://clone-3fe83.firebaseio.com",
  projectId: "clone-3fe83",
  storageBucket: "clone-3fe83.appspot.com",
  messagingSenderId: "935474062227",
  appId: "1:935474062227:web:27bd94497b7ae4be19be66",
  measurementId: "G-PC5EH5PEQB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
