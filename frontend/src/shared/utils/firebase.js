//File: lib/authHook/firebase
//Initialise firebase app
import { initializeApp, getApps, } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { BASE_URL } from "./constants";
import axios from 'axios'

export const firebaseConfig = {
    apiKey: "AIzaSyByNhR_2NprpzItlrZKXIhiEaHwfMkzc4Y",
    authDomain: "alx-webstack-simple-inve-7cc76.firebaseapp.com",
    projectId: "alx-webstack-simple-inve-7cc76",
    storageBucket: "alx-webstack-simple-inve-7cc76.appspot.com",
    messagingSenderId: "622102423708",
    appId: "1:622102423708:web:b824f38282baa110ede559",
    measurementId: "G-15K21H7BLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Cloud Messaging instancep
export const messaging = getMessaging(app);

// Request permission and get token
export const getFcmToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: "BLpIexuWCOhIqk9hcPlh9_N5ANdyj9Oeinfygzq3DZY2n0H_z6pPNWAXKRykDRYacmKN_F4s0nmAEWJrM2cDJiU",
    });


    if (currentToken) {
      console.log("FCM Token:", currentToken);
      // Send the token to your server to subscribe it to a topic
      localStorage.setItem("deviceToken", currentToken);
    } else {
      console.log("No registration token available. Request permission to generate one.");
    }
  } catch (error) {
    console.error("An error occurred while retrieving the FCM token.", error);
  }
};

export const subscribeToTopic = async (topic, tokn= null) => {
    try {
      const token = tokn ?? localStorage.getItem('deviceToken')
      if(token){
        const res = await axios.post(`${BASE_URL}/subTopic`, { token, topic });
        console.log(res);
      }else{
        console.log("No Token")
      }
    } catch (error) {
      console.error("Error subscribing to topic:", error);
    }
  };

export const unsubscribeToTopic = async (topic, tokn= null) => {
    try {
      const token = tokn ?? localStorage.getItem('deviceToken')
      if(token){
        const res = await axios.post(`${BASE_URL}/unsubTopic`, { token, topic });
        console.log(res);
      }else{
        console.log("No Token")
      }
    } catch (error) {
      console.error("Error unsubscribing to topic:", error);
    }
  };
