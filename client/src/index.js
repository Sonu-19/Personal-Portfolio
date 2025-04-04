import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Optional: your global CSS file
import App from './App';
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter for routing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  {/* Wrapping the App with BrowserRouter for routing */}
    <App />
  </BrowserRouter>
);
