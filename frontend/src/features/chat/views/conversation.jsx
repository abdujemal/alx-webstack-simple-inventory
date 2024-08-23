import React, { useEffect } from 'react';
import { formatDate, truncateText } from '../../../shared/utils/helpers.js'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import LoadingSpinner from '../../../shared/components/loadingSpinner.jsx';
import { IoCheckmark } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useChat } from '../controllers/chatProvider.jsx';
import { useAuth } from '../../auth/controllers/AuthProvider.jsx';



const Conversations = () => {
  const { getMyConversations, conversations, loading, selectedConv, setSelectedConv, setShowAddConv, showAddConv } = useChat()
  const { currentUser } = useAuth();


  useEffect((e)=>{
    getMyConversations()
  }, [])

  return (
    <div className={`flex flex-col min-h-[30%] flex-1 gap-2 py-1.5 px-5 pt-5 pb-5 mb-2 mt-6 rounded-xl border border-solid bg-primary border-white border-opacity-20 shadow-lg`}>
      <div className="flex justify-between w-full self-center">
          <h1 className="self-start text-xl font-extrabold text-white">
              Inbox
          </h1>
          <button onClick={()=>setShowAddConv(!showAddConv)}>
            <IoIosAddCircleOutline color='white' size={26}/>
          </button>
      </div>
      <div className='flex-1 flex flex-col overflow-y-auto'>
        {
          conversations.length == 0 ? loading ? <LoadingSpinner/> : <h1 className='mx-auto self-center mt-2 text-white '>Start Messaging</h1>:""
        }
        {
            conversations.map((e)=>{
              var participantId = 0;
              var amItheLastSender = e.lastMessage.sender == currentUser._id;
              const formattedTime = formatDate(e.lastMessageTimestamp);
              
              if(e.participants[0]._id != currentUser._id){
                participantId = 0;
              }else{
                participantId = 1;
              }     
              const isTyping = e.participants[participantId].online == "typing";
            
              return <div onClick={()=>setSelectedConv(e)} key={e._id} className='flex cursor-pointer px-1 gap-4 border-b border-white pb-2 border-opacity-15 items-center mt-6 text-white text-opacity-70 max-md:mr-0.5 max-md:ml-1'>
                    <div className={`flex gap-1.5 h-full`}>
                      {
                        selectedConv?._id == e._id ?
                        <div className='w-[3px] bg-white rounded-full'/>:<div/>
                      }
                      <div className=' relative'>
                        <img
                          loading="lazy"
                          src={e.participants[participantId].profileImage}
                          className="object-fill shrink-0 w-12 h-12 rounded-full"
                        />
                        <div className={`${e.participants[participantId].online == "offline" ? "bg-gray-400" : "bg-green-500"} border  p-1.5 w-fit rounded-full bottom-0 right-0 absolute`}/>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-white grow text-lg font-extrabold text-ellipsis">
                              {e.participants[participantId].username}
                      </h1>
                      <p className={`${isTyping ? 'text-green-500' : ''}`}>{isTyping ? "typing..." : truncateText(e.lastMessage.text, 20)}</p> 
                    </div>
                    <div className='flex-1'/>
                    <div className='flex flex-col gap-1 justify-start items-start'>                        
                      <p className=" text-white text-sm font-bold">{formattedTime}</p>
                      
                      {
                        amItheLastSender ? e.unreadMessages > 0 ? <IoCheckmark size={23}/> : <IoCheckmarkDoneOutline size={23}/>:
                      <div className={`${e.unreadMessages == 0 ? "text-primary" : "text-black bg-white"}  px-1.5 text-sm rounded-full self-end`}>{ e.unreadMessages}</div>
                      }
                    </div>
              </div>

            })
        }
      </div>
  </div>
  );
}

export default Conversations;
