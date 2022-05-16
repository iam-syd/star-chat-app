import React, { useState, useEffect } from 'react'
import './App.css';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import Message from './Message';

// import firebase from './firebase';
import db from "./firebase";
import { addDoc, collection, getDoc, getDocs, onSnapshot, query, QuerySnapshot, serverTimestamp } from "firebase/firestore";

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // const db = getFirestore();
    // const q = query(collection(db, "messages"))
    // const unsub = onSnapshot(q, (querySnapshot) => {
    //   setMessages(querySnapshot.docs.map(doc => doc.data()));
    // });

    const colQuery = query(collection(db, "messages"));
    const snapShotRef = onSnapshot(colQuery, (querySnapshot) => {
      setMessages(querySnapshot.docs.map(doc => doc.data()));
    });

  }, [])


  useEffect(() => {
    setUsername(prompt('Please enter your name:'));
  }, [])


  const sendMessage = (event) => {
    event.preventDefault();
    const colRef = collection(db, "messages");

    addDoc(colRef, {
      message: input,
      username: username,
      timestamp: serverTimestamp()
    })

    setInput('')
  }



  return (
    <div className='App'>
      <h1>STAR Chat 🌟</h1>

      <form>

        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={event => { setInput(event.target.value) }}
          />
          <Button
            disabled={!input}
            variant="contained"
            color='primary'
            type='submit'
            onClick={sendMessage}>Send Message</Button>
        </FormControl>

      </form>

      {
        messages.map(message => (
          <Message
            username={username}
            message={message}
          />
        ))
      }


    </div>
  );
}

export default App;
