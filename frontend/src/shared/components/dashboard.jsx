import { useState } from 'react';
import ChatSection from '../../features/chat/views/chatSection.jsx';

import ActivityView from '../../features/activity/views/activityView.jsx';


import { BsChatFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import AddConversation from '../../features/chat/views/addConversation.jsx';
import EditUser from '../../features/auth/views/editUser.jsx';
import NotificationDialog from '../../features/notifications/views/notificationDialog.jsx';
import { useChat } from '../../features/chat/controllers/chatProvider.jsx';
import { useNotification } from '../../features/notifications/controllers/notificationProvider.jsx';

const Dashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { showAddConv, setShowAddConv, showUpdateUser, setShowUpdateUser } = useChat()
  const { setOpen, open } = useNotification()

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  return (

   
    <section className='flex'>
       <ActivityView/>
       <ChatSection/>

    <section className='relative flex flex-col md:flex-row'>
      <div style={{ zIndex: 300 }}>
        <AddConversation isOpen={showAddConv} onClose={() => setShowAddConv(false)} />
        <EditUser isOpen={showUpdateUser} onClose={() => setShowUpdateUser(false)} />
        <NotificationDialog isOpen={open} onClose={() => setOpen(false)} />
      </div>
      
      {/* Chat Section */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full md:w-[450px] transition-transform duration-300 ease-in-out ${isChatOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0`}
        style={{ zIndex: 100 }}
      >
        <button
          className='absolute -top-1 right-0 p-2 text-2xl text-white md:hidden'
          onClick={toggleChat}
        >
          <IoIosCloseCircle className='size-7' />
        </button>
        <ChatSection />
      </div>

      {/* Chat Icon */}
      <button
        className={`fixed bottom-9 right-4 p-2 text-2xl bg-white rounded-full shadow-lg z-50 md:hidden transition-transform duration-300 ease-in-out ${isChatOpen ? 'hidden' : 'block'}`}
        onClick={toggleChat}
      >
        <BsChatFill className='text-primary' />
      </button>
    </section>
  );
}

export default Dashboard;
