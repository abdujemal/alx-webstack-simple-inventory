import React, { createContext, useContext, useEffect, useState } from 'react';
import { getToken } from '../../features/auth/services/localStorageService.js';

// Create a context for authentication
const AuthStateContext = createContext();

// Custom hook to use the AuthContext

// AuthProvider component to wrap around your app
export const AuthStateProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  useEffect(()=>{
    if(getToken()){
      login()
    }else{
      logout()
    }
  }, [])
  
  return (
    <AuthStateContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthStateContext.Provider>
  );
};

export const useAuthState = () => useContext(AuthStateContext);