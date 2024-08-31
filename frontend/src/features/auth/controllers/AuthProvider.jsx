// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import * as authApi from '../services/authService';
import * as localStorage from '../services/localStorageService';
import { useAuthState } from '../../../shared/controllers/authStateProvider.jsx'
import { Toaster, toast } from 'react-hot-toast'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { subscribeToTopic, unsubscribeToTopic } from '../../../shared/utils/firebase.js';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const {login:loginAction, logout:logoutAction} = useAuthState();
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);


  useEffect(() => {
    loginAction()
    const user = localStorage.getUser();
    if (user) {
      setCurrentUser(user);
    }
    authApi.getUser().then(({user})=>{
        setCurrentUser(user);  
        localStorage.saveUser(user)  
        console.log(user); 
        subscribeToTopic(user._id)  
    }).catch((e)=>{
        console.log(e);
        
        if(e.message == "Failed to authenticate token" || e.message == 'No token provided'){
    
            logout();
        }
    })
    console.log(user);
    
  }, []);

  const register = async (name, email, password, role, image) => {
    setLoading(true);
    try {
      setError(null);
      const { user, token } = await authApi.register(name, email, password, role, image);
      setCurrentUser(user);
      setLoading(false);
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const update = async (name, email, password, role, pp, image) => {
    setLoading(true);

    try {
      setError(null);
      const { user } = await authApi.update(name, email, password, role, pp, image);
      setCurrentUser(user);
      setLoading(false);
      
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const sendPasswordChangeEmail = async ( email ) => {
    setLoading(true);
    try {
      setError(null);
      const { msg } = await authApi.sendPasswordChangeEmail( email );
      // setCurrentUser(user);
      setLoading(false);
      setIsSent(true)
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const resetPassword = async ( password, confirmPassword, token ) => {
    if(password !== confirmPassword){
      setError("Password does not match");
      return;
    }
    setLoading(true);
    try {
      setError(null);
      const { msg } = await authApi.resetPassword( password, token );
      // setCurrentUser(user);
      setLoading(false);
      toast.success("Your password has been successfully changed.")
      setTimeout(()=>{
        window.location.href = '/';
      }, 2000)
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    setLoading(true);

    try {
      setError(null);
      const { user } = await authApi.login(email, password);

      setCurrentUser(user);
      setLoading(false);
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
      setLoading(false);

    }
  };

  const google = async () => {
    try {
      const { user } = await authApi.google();
      setCurrentUser(user);
    } catch (error) {
      toast.error(error.message)
    }
  };

  const logout = () => {
    unsubscribeToTopic(currentUser?._id)
    setCurrentUser(null);
    localStorage.clearToken();
    localStorage.clearUser();
    logoutAction()
  };

  return (
    <AuthContext.Provider value={{ 
      // gets
      currentUser, 
      error, 
      loading, 
      isSent,
      // sets
      setError, 
      // functions
      register, 
      login, 
      update, 
      logout, 
      google, 
      resetPassword,
      sendPasswordChangeEmail,
    }}>
      {children}
      <Toaster/>
      <ToastContainer/>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)

export { AuthProvider, AuthContext };
