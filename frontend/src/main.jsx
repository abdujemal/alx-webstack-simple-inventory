import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthStateProvider } from './shared/controllers/authStateProvider.jsx'
import { AuthProvider } from './features/auth/controllers/AuthProvider.jsx'
import { ProductProvider } from './features/product/context/ProductContext.jsx'
import { CustomerProvider } from './features/customers/context/CustomerContext.jsx'
import { ChatProvider } from './features/chat/controllers/chatProvider.jsx'

import { ActivityProvider } from './features/activity/context/ActivityContext.jsx'

import { getToken } from 'firebase/messaging'
import { messaging, subscribeToTopic } from './shared/utils/firebase.js'
import { NotificationProvider } from './features/notifications/controllers/notificationProvider.jsx'

// Register the service worker
//   });

if ('serviceWorker' in navigator && !navigator.serviceWorker.controller) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
  
      // Get FCM token
      getToken(messaging, { vapidKey: "BLpIexuWCOhIqk9hcPlh9_N5ANdyj9Oeinfygzq3DZY2n0H_z6pPNWAXKRykDRYacmKN_F4s0nmAEWJrM2cDJiU", serviceWorkerRegistration: registration })
        .then((currentToken) => {
          if (currentToken) {
            subscribeToTopic("All", currentToken)
            localStorage.setItem("deviceToken", currentToken);
          } else {
            console.log("No registration token available. Request permission to generate one.");
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    })
    .catch((err) => {
      console.error("Service Worker registration failed:", err);
    });
} else {
  console.log('Service Worker already registered or controlling the page');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthStateProvider>
      <AuthProvider>
        <NotificationProvider>
          <ChatProvider>
            <ProductProvider>
              <CustomerProvider>
                <ActivityProvider>
                  <App />
                <ActivityProvider>
              </CustomerProvider>
            </ProductProvider>
          </ChatProvider>
        </NotificationProvider>
      </AuthProvider>
    </AuthStateProvider>
  </StrictMode>
)
