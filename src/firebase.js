import { initializeApp } from 'firebase/app';

import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD8XwE4XqwDx1SCsKyDbjHenRYdCwL4NHc",
    authDomain: "facebook-messenger-clone-a444a.firebaseapp.com",
    projectId: "facebook-messenger-clone-a444a",
    storageBucket: "facebook-messenger-clone-a444a.appspot.com",
    messagingSenderId: "440299143936",
    appId: "1:440299143936:web:b267876311edf38bf1e9e5",
    measurementId: "G-2SZ0L7EKDD"
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore(app);

// collection ref
// const colRef = collection(db, 'messages');

// get collection data
// const recentData = getDocs(colRef)

export default db;
