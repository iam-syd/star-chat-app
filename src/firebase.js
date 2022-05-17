import { initializeApp } from 'firebase/app';

import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFQ7r3dA_osEk7PSuw9BQT_-ymwuBd6G8",
  authDomain: "starchat-514.firebaseapp.com",
  projectId: "starchat-514",
  storageBucket: "starchat-514.appspot.com",
  messagingSenderId: "135374927",
  appId: "1:135374927:web:84ae1361b9bd043cafa23a"
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
