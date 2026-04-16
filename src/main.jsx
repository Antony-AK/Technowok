import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import MetaPixelTracker from './utils/MetaPixelTracker.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MetaPixelTracker /> {/* 🔥 tracking every route change */}
      <App />
    </BrowserRouter>
  </StrictMode>
)