import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { createConversation, getConversations, getMessages, getUsers, markMessagesSeen, sendMessage } from '../services/chatServices';
import toast from 'react-hot-toast';
import { joinMyConversation, listenForUpdates, socket, stopChatMessage, stopConversation } from '../services/socketService';
import { useAuth } from '../../auth/controllers/AuthProvider';

// Create a context for authentication
const ChatContext = createContext();

// Custom hook to use the AuthContext

// AuthProvider component to wrap around your app
export const ChatProvider = ({ children }) => {
  const [conversations, setConversations] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false)
  const [addLoading, setAddLoading] = useState(false)
  const [messages, setmessages] = useState([]);
  const [selectedConv, setSelectedConv] = useState(null)
  const [showAddConv, setShowAddConv] = useState(null)
  const [showUpdateUser, setShowUpdateUser] = useState(null)
  const { currentUser } = useAuth();
  const bottomRef = useRef(null);

  useEffect(()=>{
    if(currentUser){
      joinMyConversation(currentUser._id) 
    }
    
  },[currentUser])

  useEffect(()=>{
    listenForUpdates(handleNewMessege, handleConversation);
    getAllUsers()

    return ()=>{
      stopChatMessage();
      stopConversation();
    }
  },[conversations, messages])

  const handleNewMessege = (msg) =>{
    if(messages.filter((e)=>e._id.toString() === msg._id.toString()).length !== 0){

    }else{
      setmessages((msgs)=>[...msgs,msg])
      setTimeout((e)=>{
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        markAsRead()
      }, 300)
    }
  }

  const handleConversation = (conv) => {
    console.log(conv._id);
    console.log(conversations.length);

    var  convs = []
    
    if(conversations.filter((e)=>e._id.toString() === conv._id.toString()).length !== 0){
      console.log("Conversation exist");
      convs = conversations.map((e)=>e._id.toString() === conv._id.toString() ? conv : e);
      
    }else{
      console.log("Conversation does not exist");
      convs = [...conversations, conv];

    }
    const sortedConversations = convs.sort((a, b) => {
      return new Date(b.lastMessageTimestamp) - new Date(a.lastMessageTimestamp);
    });
    setConversations(sortedConversations)
    console.log("conv working", conv);
    
  }

    
  const getAllUsers = async() => {
    try{
      const usrs = await getUsers();      
      
      if(conversations.length > 0){
        var newUsers = [];
        console.log({convLen: conversations.length});
        
        
        for(var usr in usrs){
          if(conversations.find((conv)=> conv.participants.find((participant)=>participant._id == usrs[usr]._id)) == undefined){
            console.log(usrs[usr].name);
            newUsers.push(usrs[usr])            
          }
        }
        setUsers(newUsers);
              
      }else{
        setUsers(usrs);
      }
      
      console.log({usrLen: users.length});
      
    }catch(e){
      console.log(e);
      
      toast.error(e.message)
    }
  }

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
      const {message, conversation} = await sendMessage(conversationId, text, userId);
      
      // console.log("Ready .... .");
      var participantId =0;
      if(selectedConv.participants[0]._id != currentUser._id){
        participantId = 0;
      }else{
        participantId = 1;
      }     
      
      socket.emit('chat message', { 
        room: selectedConv._id, 
        conversation: conversation, 
        message: message, 
        recieverId: selectedConv.participants[participantId]._id
      });
    }catch(e){
      toast.error(e.message) 
    }
  }

  const markAsRead = async() =>{
    try{     
      if(selectedConv.lastMessage.sender != currentUser._id){
        const { conversation } = await markMessagesSeen(selectedConv._id);
        socket.emit('conversation', { conversation, userId: conversation.lastMessage.sender});
        selectedConv.unreadMessages = 0
        setConversations((convs)=>convs.map((conv)=> conv._id == selectedConv._id ? conversation : conv))
      }
    }catch(e){
      // toast.error(e.message) 
      console.log(e)
    }
  }

  const toogleStatus = (status) => {
    try{
      const currentConv = conversations.find((e)=>e._id.toString() === selectedConv._id.toString());
      console.log(currentConv);
      
      var participantId = 0;
      if(selectedConv.participants[0]._id != currentUser._id){
        currentConv.participants[1].online = status // seting my status
        participantId = 0;
      }else{
        currentConv.participants[0].online = status // seting my status
        participantId = 1;
      }   
      console.log(selectedConv);
      
      socket.emit('conversation', { conversation: currentConv, userId: currentConv.participants[participantId]._id});
    }catch(e){
      console.log(e)
    }
  }

  const createNewConversation = async (user) => {
    setAddLoading(true)
    try{
      const participants = [
        {
          _id: currentUser._id,
          username: currentUser.name,
          profileImage: currentUser.pp,
          online: 'offline'
        },
        {
          _id: user._id,
          username: user.name,
          profileImage: user.pp,
          online: 'offline'
        }
      ];

      const conv = {
        participants,
        lastMessage: {
          text: "",
          sender: currentUser._id,
          senderName: currentUser.name,
          senderProfileImage: currentUser.pp,
          timestamp: Date.now,
        },
      }
      
      const conversation = await createConversation(conv);

      var participantId =0;
      if(conversation.participants[0]._id != currentUser._id){
        participantId = 0;
      }else{
        participantId = 1;
      }

      socket.emit('conversation', { 
        conversation, 
        userId: conversation.participants[participantId]._id,
      });

      setConversations((e)=>[conversation,...e])
      setSelectedConv(conversation)
      setAddLoading(false)
      setShowAddConv(false)
    }catch(e){
      toast.error(e.message) 
      setAddLoading(false)
    }
  }
  
 
  return (
    <ChatContext.Provider value={{
      // gets
      conversations, 
      messages, 
      loading, 
      selectedConv, 
      bottomRef,
      showAddConv,
      users,
      addLoading,
      showUpdateUser, 
      // sets
      setShowUpdateUser,
      setSelectedConv,
      setConversations,
      setShowAddConv,
      // functions
      getMyConversations, 
      getMessegesOfConversations,
      send,
      markAsRead,
      toogleStatus,
      getAllUsers,
      createNewConversation,
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
