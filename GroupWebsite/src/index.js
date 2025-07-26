import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // 👈 import your context

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider> {/* 👈 wrap everything in AuthProvider */}
      <App />
    </AuthProvider>
  </BrowserRouter>
);

