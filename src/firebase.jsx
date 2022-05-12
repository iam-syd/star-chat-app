import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyD8XwE4XqwDx1SCsKyDbjHenRYdCwL4NHc",
    authDomain: "facebook-messenger-clone-a444a.firebaseapp.com",
    projectId: "facebook-messenger-clone-a444a",
    storageBucket: "facebook-messenger-clone-a444a.appspot.com",
    messagingSenderId: "440299143936",
    appId: "1:440299143936:web:b267876311edf38bf1e9e5",
    measurementId: "G-2SZ0L7EKDD"

});

const db = firebaseApp.firestore();

export default db;