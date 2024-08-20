import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthStateProvider } from './shared/controllers/authStateProvider.jsx'
import { AuthProvider } from './features/auth/controllers/AuthProvider.jsx'
import { ProductProvider } from './features/product/context/ProductContext.jsx'
import { CustomerProvider } from './features/customers/context/CustomerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthStateProvider>
      <AuthProvider>
        <ProductProvider>
          <CustomerProvider>
            <App />
          </CustomerProvider>
        </ProductProvider>
      </AuthProvider>
    </AuthStateProvider>
  </StrictMode>,
)
