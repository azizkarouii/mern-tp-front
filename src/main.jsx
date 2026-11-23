import React from 'react';
import ReactDOM from 'react-dom/client';
// TODO Volet 1 - Etape 1 : Importer { BrowserRouter } depuis 'react-router-dom'
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* TODO Volet 1 - Etape 1 : Envelopper <App /> dans <BrowserRouter> */}
    <App />
  </React.StrictMode>
);
