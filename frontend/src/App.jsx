/* eslint-disable no-unused-vars */
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './shared/components/notFound.jsx'
import PrivateRoute from './shared/components/privateRoute.jsx'
import Login from './features/auth/views/login.jsx'
import SideBarLayout from './shared/components/sidebar.jsx'
import Register from './features/auth/views/register.jsx'
import { useEffect } from 'react'
import ProductPage from './features/product/views/ProductPage.jsx'
import EditProductPage from './features/product/views/EditProductPage.jsx'
import CustomerPage from './features/customers/views/CustomerPage.jsx'
import ActivityPage from './features/activity/views/ActivityPage.jsx'
import Dashboard from './shared/components/dashboard.jsx'
import { getFcmToken, messaging, subscribeToTopic } from "./shared/utils/firebase.js";
import { onMessage } from 'firebase/messaging'
import { toast } from 'react-toastify'
import ResetPassword from './features/auth/views/resetPassword.jsx'
import ForgotPassword from './features/auth/views/forgetPassword.jsx'

function App() {

  // const { currentUser:user } = useAuth()

  // useEffect(()=>{

  //   toast.success("Works")
  // })

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Device Token for notification
      // const token = await getToken(messaging, {
      //   vapidKey:  process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      // });
      
      console.log("Notification works");
    } else if (permission === "denied") {
      console.log("Denied for the notification");
    }
  }
  useEffect(() => {
    // getFcmToken()
    requestPermission()
    
  }, []);

  useEffect(() => {
    // Listen for foreground messages
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("Message received in foreground: ", payload);
      toast(
      <div>
        <h4 className="font-bold">{payload.notification.title}</h4>
        <p >{payload.notification.body}</p>
      </div>
      )
      // setNotification(payloa.notification.titleion);
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <SideBarLayout />
          </PrivateRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
          <Route path="/buy-product/:id" element={<ActivityPage />} />
          <Route path="customers" element={<CustomerPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path='/login' element={
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        } />
        <Route path="/forgot-password" element={
          <PrivateRoute>
            <ForgotPassword />
          </PrivateRoute>
          } />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path='/register' element={
          <PrivateRoute>
            <Register />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App
