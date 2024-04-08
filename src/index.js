// styles
import './styles/index.css';
// react
import React from 'react';
import ReactDOM from 'react-dom/client';
// contexts
import { AuthContextProvider } from './context/authContext';
// components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
