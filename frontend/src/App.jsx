/* eslint-disable no-unused-vars */
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './shared/components/notFound.jsx'
import PrivateRoute from './shared/components/privateRoute.jsx'
import Login from './features/auth/views/login.jsx'
import SideBarLayout from './shared/components/sidebar.jsx'
import Register from './features/auth/views/register.jsx'
import { useAuth } from './features/auth/controllers/AuthProvider.jsx'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import ProductPage from './features/product/views/ProductPage.jsx'
import EditProductPage from './features/product/views/EditProductPage.jsx'
import CustomerPage from './features/customers/views/CustomerPage.jsx'


function App() {

  // const { currentUser:user } = useAuth()

  // useEffect(()=>{

  //   toast.success("Works")
  // })


  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <SideBarLayout />
          </PrivateRoute>
        }>
          <Route index element={<h1>dashboard</h1>} />
          <Route path="products" element={<ProductPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
          <Route path="customers" element={<CustomerPage/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path='/login' element={
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        } />
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
