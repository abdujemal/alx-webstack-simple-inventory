import React, { useEffect, useState } from 'react';
import { useAuth } from '../../auth/controllers/AuthProvider.jsx';
import { useChat } from '../controllers/chatProvider.jsx';
import { IoSend } from "react-icons/io5";

const TextArea = () => {
    const { currentUser } = useAuth()
    const { selectedConv , send, toogleStatus} = useChat();
    const [newMessage, setNewMessage] = useState("")
    const [typingTimeout, setTypingTimeout] = useState(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newMessage.length > 0){            
            send(selectedConv._id, newMessage, currentUser._id)
            setNewMessage("")
        }
    }

    useEffect(() => {
        // Clean up the timeout on component unmount
        return () => {
            if (typingTimeout) clearTimeout(typingTimeout);
        };
    }, [typingTimeout]);

    const handleTypingEvent = (e) => {
        setNewMessage(e.target.value)

        // Emit typing event to the server
        toogleStatus("typing")

        // Clear the previous timeout to prevent premature stopping
        if (typingTimeout) clearTimeout(typingTimeout);

        // Set a new timeout to stop typing after a delay
        const timeoutId = setTimeout(() => {
        toogleStatus("online")
        }, 2000); // 2 seconds of inactivity before considering the user has stopped typing

        setTypingTimeout(timeoutId);
    };


    return (
        <div className='w-full flex justify-center'>
            {
              selectedConv ?
              <div className=' w-[90%] py-2 px-4 mb-5 bg-white shadow-md border self-center rounded-full border-black border-opacity-30'>
                  <form onSubmit={handleSubmit} className='text-primary flex gap-2 items-center'>
                      <input type="text" className='flex-1 border-none text-black'  value={newMessage} onChange={handleTypingEvent}/>
                      <button type='submit'><IoSend size={25}/></button>
                  </form>
              </div>:
              <div/>
            }
        </div>
    );
}

export default TextArea;
