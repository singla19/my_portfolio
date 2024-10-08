import React from 'react';
import ReactDOM from 'react-dom/client'; // Using ReactDOM's new root API
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
