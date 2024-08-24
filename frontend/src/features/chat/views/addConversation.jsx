import React, { useState } from 'react';
import { useChat } from '../controllers/chatProvider';
import toast from 'react-hot-toast';
import { FaCheckCircle } from "react-icons/fa";


const AddConversation = ({ isOpen, onClose }) => {
    if (!isOpen) return <div/>;

    const { users, addLoading, createNewConversation } = useChat()
    const [selectedUser, setSeletedUser] = useState(null)

    const handleConfirm = ()=>{
        if(!selectedUser){
            toast.error("Please select a user")
            return;
        }
        createNewConversation(selectedUser);
    }   

     

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg flex flex-col shadow-lg max-h-[70%] w-96">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-700">Start Chatting</h2>
                </div>
                <div className="px-4 flex-1 overflow-auto">
                    {
                        users.map((e)=>
                            <div onClick={()=>{setSeletedUser(e)}} className={`${selectedUser?._id == e._id ? "bg-opacity-15 bg-primary" : ""} rounded-md flex gap-3.5 border-b py-2 px-3 cursor-pointer hover:bg-opacity-5 hover:bg-black`} key={e._id}>
                                <img
                                    loading="lazy"
                                    src={e.pp}
                                    alt='User Profile'
                                    className="object-contain w-14 h-14 rounded-full"
                                />
                                <div className="flex flex-col self-start">
                                    <div className="self-start text-black">{e.name}</div>
                                    <div className="text-black text-opacity-50">{e.role}</div>
                                </div>
                                <div className='flex-1'/>
                                {
                                    selectedUser?._id == e._id ?
                                    <FaCheckCircle color='green' className=' self-center' size={26}/>:
                                    <div/>
                                }
                            </div>
                            
                        )
                    }
                </div>
                <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                    <button onClick={handleConfirm}  className={` ${addLoading ? "cursor-wait bg-secondary" : " cursor-pointer bg-primary"} px-4 py-2 text-white rounded hover:bg-blue-700`}>{ addLoading ? "Loading..." : "Confirm"}</button>
                </div>
            </div>
        </div>
    );
}

export default AddConversation;
