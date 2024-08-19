import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './shared/view/components/notFound.jsx'
import PrivateRoute from './shared/view/components/privateRoute.jsx'
import Login from './features/auth/views/login.jsx'
import SideBarLayout from './shared/view/components/sidebar.jsx'
import Register from './features/auth/views/register.jsx'
import { useAuth } from './features/auth/controllers/AuthProvider.jsx'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import Dashboard from './shared/view/dashboard.jsx'

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
          <Route index element={<Dashboard/>}/>
          <Route path="products" element={<h1>Products</h1>}/>
          <Route path="customers" element={<h1>Custommers</h1>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
        <Route path='/login' element={
          <PrivateRoute>            
            <Login/>
          </PrivateRoute>
          }/>
        <Route path='/register' element={
           <PrivateRoute>            
            <Register/>
          </PrivateRoute>
        }/>
      </Routes>
    </Router>
  )
}

export default App