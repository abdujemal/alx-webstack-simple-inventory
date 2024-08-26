import React, { useState } from 'react';
import { useAuth } from '../../auth/controllers/AuthProvider.jsx';
import Conversations from './conversation.jsx';
import Messages from './messages.jsx';
import TextArea from './textArea.jsx';
import AddConversation from './addConversation.jsx';
import { useChat } from '../controllers/chatProvider.jsx';
import EditUser from '../../auth/views/editUser.jsx';
import NotificationDropdown from '../../notifications/views/notificationDropdown.jsx';
import { useNotification } from '../../notifications/controllers/notificationProvider.jsx';
import NotificationDialog from '../../notifications/views/notificationDialog.jsx';



const ChatSection = () => {
  const { currentUser } = useAuth()  
  const { showAddConv, setShowAddConv, showUpdateUser, setShowUpdateUser } = useChat()
  const {setOpen, open} = useNotification()
 
  return (

    <div className="flex flex-col  ml-5 md:ml-0 w-[450px] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-5 pt-7 pb-px h-screen mx-auto w-full bg-primary max-md:mt-0">
            <div className="flex gap-5 justify-between self-center w-full text-xl">
              { currentUser !== null ?
              <div className="flex gap-3.5">
                <img
                  onClick={()=>setShowUpdateUser(true)} 
                  loading="lazy"
                  src={currentUser.pp}
                  alt='User Profile'
                  className="object-fill w-16 rounded-full cursor-pointer"
                />                
                <div className="flex flex-col self-start">
                  <div className="self-start text-white">{currentUser.name}</div>
                  <div className="text-white text-opacity-50">{currentUser.role}</div>
                </div>
              </div> : <div/>
              }
              <NotificationDropdown />
            </div>

            <Conversations/>  
            <Messages/> 
            <TextArea/>
           
          </div>
        </div>
  );
}

export default ChatSection;