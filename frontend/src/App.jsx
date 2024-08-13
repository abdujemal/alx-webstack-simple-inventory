import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex m-auto justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="http://localhost:3000/api/v1/auth/google" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
// import React, { useState, useEffect, useRef } from 'react';
// import io from 'socket.io-client';
// import './App.css';

// const socket = io('http://localhost:3000');

// function App() {
//     const [room, setRoom] = useState('');
//     const [messages, setMessages] = useState([]);
//     const [conversations, setConversations] = useState([]);
//     const [input, setInput] = useState('');
//     const messagesEndRef = useRef(null);


//     useEffect(() => {
//         if (room) {
//             // Join room when the room changes
//             socket.emit('join room', room);

//             // Join conversation when it changes
//             socket.emit('join my conversations', 'user2');

//             // Listen for incoming chat messages
//             socket.on('conversation', (msg) => {
//                 setConversations((prevMessages) => [...prevMessages, msg]);
//             });

//             // Listen for incoming chat messages
//             socket.on('chat message', (msg) => {
//               setMessages((prevMessages) => [...prevMessages, msg]);
//             });

//             // Clean up on unmount or when room changes
//             return () => {
//                 socket.off('chat message');
//             };
//         }
//     }, [room]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (input.trim()) {
//             socket.emit('chat message', { room, reciverId:'user1', message: input });
//             setInput('');
//         }
//     };

//     const handleRoomChange = (e) => {
//         setRoom(e.target.value);
//         setMessages([]); // Clear messages when switching rooms
//     };

//     const scrollToBottom = () => {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     return (
//       <div className="flex">
//         <div className="App">
//             <select onChange={handleRoomChange} value={room}>
//                 <option value="">Select a room</option>
//                 <option value="room1">Room 1</option>
//                 <option value="room2">Room 2</option>
//                 <option value="room3">Room 3</option>
//             </select>
//             <ul className="messages">
//                 {messages.map((msg, index) => (
//                     <li key={index}>{msg}</li>
//                 ))}
//                 <div ref={messagesEndRef} />
//             </ul>
//             <form onSubmit={handleSubmit} className="message-form">
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Type your message..."
//                 />
//                 <button type="submit">Send</button>
//             </form>
//         </div>
//         <div className="App w-52">
//             {/* <select onChange={handleRoomChange} value={room}>
//                 <option value="">Select a room</option>
//                 <option value="room1">Room 1</option>
//                 <option value="room2">Room 2</option>
//                 <option value="room3">Room 3</option>
//             </select> */}
//             <ul className="messages">
//                 {conversations.map((msg, index) => (
//                     <li key={index}>{msg}</li>
//                 ))}
//                 {/* <div ref={conversations} /> */}
//             </ul>
//             {/* <form onSubmit={handleSubmit} className="message-form">
//                 <input
//                     type="text"
//                     value={input}
//                     onChange={(e) => setInput(e.target.value)}
//                     placeholder="Type your message..."
//                 />
//                 <button type="submit">Send</button>
//             </form> */}
//         </div>
//       </div>
//     );
// }

// export default App;
