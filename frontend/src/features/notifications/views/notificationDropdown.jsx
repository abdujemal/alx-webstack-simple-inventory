import React, { useState, useRef, useEffect } from 'react';
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNotification } from '../controllers/notificationProvider';


const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {notifications, markNotificationAsRead, setOpen, getNotifications} = useNotification()
  const [unread, setUnread] = useState([])
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    setUnread(notifications.filter((e)=>e.isRead == false))
  },[notifications])

  useEffect(()=>{
    if(isOpen){
        for(var i in unread){
            markNotificationAsRead(unread[i]._id)
        }
    }
  },[isOpen])

  // Close the dropdown if clicked outside of it
  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative self-center" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="relative z-10 flex items-center text-gray-600 focus:outline-none"
      >
        <span className="sr-only">Open notifications</span>
        <img
            src='notifications.svg'
            className="object-contain shrink-0 my-auto aspect-square w-[25px]"
        />
        {unread.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
            {unread.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute z-50 right-0  w-80 mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="pt-2 flex flex-col">
            {notifications.length === 0 ? (
              <div className="px-4 py-2 text-gray-600">No notifications</div>
            ) : (
              notifications.slice(0,5).map((notification, index) => (
                <div key={index} className=' border-b flex gap-3 items-center justify-between px-2 mx-2'>
                    <IoMdNotificationsOutline size={25} color='purple' />
                    <div className="flex-1 py-3 text-gray-800 border-gray-200">
                        <div className='text-[16px] font-bold'>{notification.title ?? "New Notification"}</div>
                        <div className="text-sm">{notification.message}</div>
                    </div>
                </div>    
              ))
            )}
          <button onClick={()=>{getNotifications(null,10);setIsOpen(false);setOpen(true)}} className='bg-gray-300 rounded-md px-2 py-1 self-end m-2 text-sm'>Show More</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
