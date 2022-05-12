import React, { useState, useEffect } from 'react'
import './App.css';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import Message from './Components/Message';
import db from './firebase';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(()=>{

    db.collection('message').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => {
        doc.data()}))
    })

  }, [])

  useEffect(() => {
    const usernameVal = prompt('Please enter your name:')
    setUsername(usernameVal);
  },[])


  const sendMessage = (event) => {
    event.preventDefault();

    //current input val(current message) is apended at the end of messages array
    setMessages([
      ...messages, { username: username, text: input }
    ])
    setInput('')

  }

  return (
    <div className='App'>
      <h1>Hello SYD 🚀</h1>

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
