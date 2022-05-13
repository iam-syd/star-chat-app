import React, { useState, useEffect } from 'react'
import './App.css';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import Message from './Message';
import database from './firebase.js';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { getFirestore } from 'firebase/firestore';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useEffect(() => {

  //   database.collection('messages').onSnapshot(snapshot => {
  //     setMessages(snapshot.docs.map(doc =>
  //       doc.data()))
  //   })
// }, [])

    useEffect(() => {
      const db = getFirestore();
      const q = query(collection(db, "messages"))
      const unsub = onSnapshot(q, (querySnapshot) => {
        setMessages(querySnapshot.docs.map(doc => doc.data()));
      });
    }, [])


  useEffect(() => {
    const usernameVal = prompt('Please enter your name:')
    setUsername(usernameVal);
  }, [])


  const sendMessage = (event) => {
    event.preventDefault();

    //current input val(current message) is apended at the end of messages array
    setMessages([
      ...messages, { username: username, message: input }
    ])
    setInput('')

  }

  return (
    <div className='App'>
      <h1>SYD Chat 🚀</h1>

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
