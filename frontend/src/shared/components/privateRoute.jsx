import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from '../controllers/authStateProvider.jsx';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuthState();
  const { pathname, search } = useLocation();


  useEffect(() => {
    const query = new URLSearchParams(search);
    const token = query.get('token');
    if (token) {
      localStorage.setItem('authToken', token);
      window.location.href = '/';
    }
  }, [search]);

  if(pathname == "/login" 
    || pathname == "/register" 
    || pathname == '/forgot-password' 
  ){
    return isAuthenticated ? <Navigate to="/" /> : children;
  }else{
    return isAuthenticated ? children : <Navigate to="/login" />;
  }
};

export default PrivateRoute;
