import { createContext, useContext, useEffect, useState } from "react";
import { getNotification, makeNotificationRead } from "../services/notificationService";
import { toast } from 'react-hot-toast'


const NotificationContext = createContext();

const NotificationProvider = ({ children }) => {

    const [notifications, setNotifications] = useState([])
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)



    useEffect(()=>{
        getNotifications(null,5)
    },[])

    const getNotifications = async (page, limit = 10) => {
        setLoading(true)
        try{
            if(!page){
                setNotifications([])
            }
            
            const notifications = await getNotification(page, limit);
            if(!page){
                setNotifications(notifications);
            }else{
                setNotifications((e)=>[...e,...notifications])
            }
            setLoading(false)
        }catch(e){
            setLoading(false)

            toast.error(e.message) 
        }
    }  

    const markNotificationAsRead = async (notificationId) => {
        try{
          console.log(notificationId)
          const notification = await makeNotificationRead(notificationId);
          setNotifications((not)=>not.map((e)=>e._id === notificationId ? {...e, isRead: true} : e));
        }catch(e){
          toast.error(e.message) 
        }
    }     

  return (
    <NotificationContext.Provider value={{ 
      // gets
      open, 
      notifications,
      loading,
      // sets
      setOpen,
      // functions  
      getNotifications,
      markNotificationAsRead, 
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext)

export { NotificationProvider, NotificationContext };
