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


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthStateProvider>
      <AuthProvider>
        <ChatProvider>
          <ProductProvider>
            <CustomerProvider>
              <ActivityProvider>
                <App />
              </ActivityProvider>
            </CustomerProvider>
          </ProductProvider>
        </ChatProvider>
      </AuthProvider>
    </AuthStateProvider>
  </StrictMode>,
)
