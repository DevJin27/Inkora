import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Buy from './Buy'
import Auth from './Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/auth" element={<Auth />} /> 
        </Routes>
      </BrowserRouter>
    </StrictMode>
)
