import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import NavBar from './NavBar'
import Buy from './Buy'
import Auth from './Login'
import Trade from './Trade'
import Sell from './Sell'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Buy" element={<Buy />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/Trade" element={<Trade />} />
          <Route path="/Sell" element={<Sell />} /> 
        </Routes>
      </BrowserRouter>
    </StrictMode>
)

