import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyD8XwE4XqwDx1SCsKyDbjHenRYdCwL4NHc",
    authDomain: "facebook-messenger-clone-a444a.firebaseapp.com",
    projectId: "facebook-messenger-clone-a444a",
    storageBucket: "facebook-messenger-clone-a444a.appspot.com",
    messagingSenderId: "440299143936",
    appId: "1:440299143936:web:b267876311edf38bf1e9e5",
    measurementId: "G-2SZ0L7EKDD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async function getMessages(db) {
//     const citiesCol = collection(db, 'messages');
//     const citySnapshot = await getDocs(citiesCol);
//     const db = citySnapshot.docs.map(doc => doc.data());
//     return db;
// }

export default db;
