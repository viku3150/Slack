import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_c9L7lu-EEyMY2G_1ezFVl9W2MA-FSFg",
  authDomain: "slack-clone-2a780.firebaseapp.com",
  projectId: "slack-clone-2a780",
  storageBucket: "slack-clone-2a780.appspot.com",
  messagingSenderId: "52028081793",
  appId: "1:52028081793:web:8b252d570024d1f2daaf80",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
