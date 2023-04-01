import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';


const root = createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
      <AuthProvider>
    <Router>
        <App />
    </Router>
      </AuthProvider>
  </React.StrictMode>
);