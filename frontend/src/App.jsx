import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './shared/view/components/notFound.jsx'
import PrivateRoute from './shared/view/components/privateRoute.jsx'
import Login from './features/auth/views/login.jsx'
import SideBarLayout from './shared/view/components/sidebar.jsx'
import Register from './features/auth/views/register.jsx'
import { useAuth } from './features/auth/controllers/AuthProvider.jsx'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import Dashboard from './shared/view/dashboard.jsx'

function App() {

  // const { currentUser:user } = useAuth()

  // useEffect(()=>{
  //   toast.success("Works")
  // })


  return (  
    <Router>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <SideBarLayout />
          </PrivateRoute>
          }> 
          <Route index element={<Dashboard/>}/>
          <Route path="products" element={<h1>Products</h1>}/>
          <Route path="customers" element={<h1>Custommers</h1>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
        <Route path='/login' element={
          <PrivateRoute>            
            <Login/>
          </PrivateRoute>
          }/>
        <Route path='/register' element={
           <PrivateRoute>            
            <Register/>
          </PrivateRoute>
        }/>
      </Routes>
    </Router>
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
