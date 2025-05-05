import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Home from './Home'
import Auth from './Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} /> 
        </Routes>
      </BrowserRouter>
    </StrictMode>
)
