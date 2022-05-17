import React, { useState, useEffect } from 'react'
import './App.css';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import Message from './Message';
import db from "./firebase";
import { addDoc, collection, getDoc, getDocs, onSnapshot, query, QuerySnapshot, serverTimestamp, orderBy } from "firebase/firestore";
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {

    // FETCHING DATA 💾
    const colQuery = query(collection(db, "messages"), orderBy('timestamp', 'desc'));
    const snapShotRef = onSnapshot(colQuery, (querySnapshot) => {
      setMessages(querySnapshot.docs.map(doc => (
        { id: doc.id, message: doc.data() }
      )));
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
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>STAR Chat 🌟</h1>

      <form className='app__form'>
        <FormControl className="app__formControl">
          <Input
            className='app__input'
            placeholder='Enter a message...'
            value={input}
            onChange={event => { setInput(event.target.value) }}
          />

          <IconButton
            className='app__iconButton'
            disabled={!input}
            variant="text"
            color='primary'
            type='submit'
            onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>


      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message
              key={id}
              username={username}
              message={message}
            />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
