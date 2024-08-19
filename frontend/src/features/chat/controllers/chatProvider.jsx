import React, { createContext, useContext, useEffect, useState } from 'react';
import { getConversations, getMessages, sendMessage } from '../services/chatServices';
import toast from 'react-hot-toast';

// Create a context for authentication
const ChatContext = createContext();

// Custom hook to use the AuthContext

// AuthProvider component to wrap around your app
export const ChatProvider = ({ children }) => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false)
  const [messages, setmessages] = useState([]);
  const [selectedConv, setSelectedConv] = useState(null)

  const getMyConversations = async() => {
    setLoading(true);
    try{
      const conversations = await getConversations();
      setConversations(conversations);
      setLoading(false);

    }catch(e){
      toast.error(e.message)
      setLoading(false);
    }
  }
  
  const getMessegesOfConversations = async (conversationId, page) => {
    try{
      if(!page){
        setmessages([])
      }
      const messeges = await getMessages(conversationId, page);
      const msgs = messeges.reverse()
      if(!page){
        setmessages(msgs);
      }else{
        setmessages((e)=>[...msgs, ...e])
      }
    }catch(e){
      toast.error(e.message) 
    }
  }

  const send = async(conversationId, text, userId) =>{
    try{     
      const messeges = await sendMessage(conversationId, text, userId);
      setmessages(messeges);
    }catch(e){
      toast.error(e.message) 
    }
  }
  
 
  return (
    <ChatContext.Provider value={{
      // gets
      conversations, 
      messages, 
      loading, 
      selectedConv, 
      // sets
      setSelectedConv,
      // functions
      getMyConversations, 
      getMessegesOfConversations,
      send,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
