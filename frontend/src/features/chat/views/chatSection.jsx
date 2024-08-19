import React, { useState } from 'react';
import { useAuth } from '../../auth/controllers/AuthProvider.jsx';
import Conversations from './conversation.jsx';
import Messages from './messages.jsx';
import { useChat } from '../controllers/chatProvider.jsx';
import { IoSend } from "react-icons/io5";

const ChatSection = () => {

  const { currentUser } = useAuth()
  const { selectedConv , send} = useChat();
  const [newMessage, setNewMessage] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(newMessage.length > 0){            
        send(selectedConv._id, newMessage, currentUser._id)
        setNewMessage("")
        console.log("Ready .... .");
    }
}

  return (
    <div className="flex flex-col ml-5 w-[450px] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 pt-7 pb-px h-screen mx-auto w-full bg-primary max-md:mt-7">
            <div className="flex gap-5 justify-between self-center w-full text-xl">
              { currentUser !== null ?
              <div className="flex gap-3.5">
                <img
                  loading="lazy"
                  src={currentUser.pp}
                  alt='User Profile'
                  className="object-contain  w-14 rounded-full"
                />
                <div className="flex flex-col self-start">
                  <div className="self-start text-white">{currentUser.name}</div>
                  <div className="text-white text-opacity-50">{currentUser.role}</div>
                </div>
              </div> : <div/>
              }
              <img
                src='notifications.svg'
                className="object-contain shrink-0 my-auto aspect-square w-[25px]"
              />
            </div>

            <Conversations/>  
            <Messages/> 
            {
              selectedConv ?
              <div className='w-[90%] py-2 px-5 mb-5 bg-white shadow-md border self-center rounded-full border-black border-opacity-30'>
                  <form onSubmit={handleSubmit} className='text-primary flex gap-2 items-center'>
                      <input type="text" className='flex-1 border-none text-black'  value={newMessage} onChange={(e)=>setNewMessage(e.target.value)}/>
                      <button type='submit'><IoSend size={25}/></button>
                  </form>
              </div>:
              <div/>
            }
          </div>
        </div>
  );
}

export default ChatSection;