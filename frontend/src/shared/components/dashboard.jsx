import React from 'react';
import Admin from "../../zresources/admin.jsx"
import ChatSection from '../../features/chat/views/chatSection.jsx';
import ActivityView from '../../features/activity/views/activityView.jsx';


const Dashboard = () => {
  return (
   
    <section className='flex'>
       <ActivityView/>
       <ChatSection/>
    </section>
  );
}

export default Dashboard;
