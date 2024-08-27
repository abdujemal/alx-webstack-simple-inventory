import React, { useEffect, useRef, useState } from 'react';
import { useChat } from '../controllers/chatProvider';
import { useAuth } from '../../auth/controllers/AuthProvider';
import { format } from 'date-fns';
import { BsArrowUp } from "react-icons/bs";
import toast from 'react-hot-toast';
import { joinRoom, leaveRoom } from '../services/socketService';



const Messages = () => {
    const { selectedConv , getMessegesOfConversations, messages, bottomRef, markAsRead, toogleStatus} = useChat();
    const containerRef = useRef(null);
    
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const { currentUser } = useAuth();

    useEffect(()=>{
        if(selectedConv){
            setPage(2);
            joinRoom(selectedConv._id)
            getMessegesOfConversations(selectedConv._id).then((e)=>{
                setTimeout((e)=>{
                    markAsRead()
                    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
                }, 300)
            })
            toogleStatus('online')
            return ()=>{
                toogleStatus("offline")
                leaveRoom(selectedConv._id)
            }
           
        }        
    },[selectedConv])  

    const loadMoreMessages = async () => {
        console.log("loading more");
        setPage((e)=>e+1);
        console.log(`page: ${page}`);
        setLoading(true);
        if(selectedConv){
            try{
                await getMessegesOfConversations(selectedConv._id, page);
                console.log(`page: ${page}`);
                setLoading(false);
            }catch(e){
                setLoading(false);
                toast.error("Can't load more")
            }
        }
    };

    const formatDate = (date) => {
        return format(date, 'MMMM dd, yyyy');
    };
    
    const formatTime = (date) => {
        return format(date, 'hh:mm a');
    };

    let lastDate = null;
    
    
    return (
        <div ref={containerRef} className={`${selectedConv ? "flex" : "hidden"} relative flex-col w-full overflow-auto h-[70%] bg-[url('/chat_bg.jpg')] bg-opacity-30 bg-center px-5 bg-white mb-5 mt-3 rounded-xl border border-solid border-white border-opacity-20 shadow-lg`}>
            {
                loading ?
                <p className='self-center bg-white p-1 rounded mt-1'>Loading..</p>:
                <p onClick={(e)=>loadMoreMessages()} className='self-center bg-white p-2 rounded mt-1 flex cursor-pointer border border-black border-opacity-30 shadow-md'><BsArrowUp/>Load More</p>                
            }
            <div className={`flex-1 flex flex-col `}>
                {
                    messages.map((e, i)=>{
                        const messageDate = formatDate(e.timestamp);
                        const showDate = lastDate !== messageDate;
                        lastDate = messageDate;

                        return <div  key={e._id} className={'flex flex-col'}>
                            {showDate && (
                            <div className="text-center w-fit self-center bg-white shadow-md border text-black text-opacity-70 border-black border-opacity-30 rounded-full text-xs my-2 p-2">
                                {messageDate}
                            </div>
                            )}
                            <div className={`${ currentUser._id == e.sender ? "self-end ml-10 rounded-l-2xl rounded-tr-2xl bg-purple-200": 'self-start mr-10 rounded-r-2xl rounded-tl-2xl bg-white'} shadow-md border border-black border-opacity-30 px-4 pt-3 pb-2 mt-2 w-fit flex flex-col`}>
                                <p>{e.text}</p>
                                <p className={`${ currentUser._id == e.sender ? "self-end": 'self-start'} text-[12px] text-black text-opacity-70 mt-1`}>{formatTime(e.timestamp)}</p>
                            </div>
                        </div>

                        }
                    )
                }    
                <div ref={bottomRef} className='h-2'></div>
            </div>
        </div>
    )}

export default Messages;