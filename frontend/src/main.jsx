import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthStateProvider } from './shared/controllers/authStateProvider.jsx'
import { AuthProvider } from './features/auth/controllers/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthStateProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AuthStateProvider>
  </StrictMode>,
)
