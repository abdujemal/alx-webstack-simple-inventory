import React from 'react';
import Admin from "../../zresources/admin.jsx"
import ChatSection from '../../features/chat/views/chatSection.jsx';

const Dashboard = () => {
  return (
   
    <section className='flex'>
       <section className='flex-1'>
         dashboard
       </section>
       <ChatSection/>
    </section>
  );
}

export default Dashboard;
