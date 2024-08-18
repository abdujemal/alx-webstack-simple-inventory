import './App.css'
import SideBar from './shared/components/sidebar.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './shared/components/notFound.jsx'
import ProductPage from './features/product/views/ProductPage.jsx'
import { ProductProvider } from './features/product/context/ProductContext.jsx'

function App() {
  return (
    <Router>
      <ProductProvider>
        <div className='flex flex-col md:flex-row min-h-screen overflow-hidden'>
          <SideBar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<h1>Dashboard</h1>} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/customers" element={<h1>customers</h1>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ProductProvider>
    </Router>
  )
}

export default App
