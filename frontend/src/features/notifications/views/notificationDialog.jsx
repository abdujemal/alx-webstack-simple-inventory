import React, { useEffect, useState } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNotification } from '../controllers/notificationProvider';
import { BsArrowDown } from "react-icons/bs";



const NotificationDialog = ({ isOpen, onClose }) => {
    if (!isOpen) return <div/>

    const {notifications, markNotificationAsRead, getNotifications, loading} = useNotification()
    const [unread, setUnread] = useState([])
    const [page, setPage] = useState(1)

    useEffect(()=>{
        setUnread(notifications.filter((e)=>e.isRead == false))
    },[notifications])
    
    useEffect(()=>{
        if(isOpen){
            for(var i in unread){
                markNotificationAsRead(unread[i]._id)
            }
        }
    },[isOpen, unread])

    const loadMoreNotification = async () => {
        console.log("loading more");
        setPage((e)=>e+1);
        console.log(`page: ${page}`);
        getNotifications(page);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg flex flex-col shadow-lg max-h-[75%] w-96">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
                </div>
                <div className="px-2 flex-1 flex flex-col overflow-auto">
                    {notifications.length === 0 ? (
                        <div className="px-4 py-2 text-gray-600">No notifications</div>
                    ) : (
                        notifications.map((notification, index) => (
                            <div key={index} className=' border-b flex gap-3 items-center justify-between px-2 mx-2'>
                                <IoMdNotificationsOutline size={25} color='purple' />
                                <div className="flex-1 py-3 text-gray-800 border-gray-200">
                                    <div className='text-[16px] font-bold'>{notification.title ?? "New Notification"}</div>
                                    <div className="text-sm">{notification.message}</div>
                                </div>
                            </div>    
                        ))
                    )}
                    {
                    loading ?
                    <p className='self-center bg-white p-1 rounded mt-1'>Loading..</p>:
                    <p onClick={(e)=>loadMoreNotification()} className='self-center bg-white p-2 rounded my-1 w-fit flex cursor-pointer border border-black border-opacity-15'><BsArrowDown/>Load More</p>                
                }
                </div>

                <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-2">
                    <button onClick={()=>{ getNotifications(null,5); onClose()}} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                    {/* <button onClick={handleSubmit}  className={` ${loading ? "cursor-wait bg-secondary" : " cursor-pointer bg-primary"} px-4 py-2 text-white rounded hover:bg-secondary`}>{ loading ? "Loading..." : "Save"}</button> */}
                </div>
            </div>
        </div>
    );
}

export default NotificationDialog;
