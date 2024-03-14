import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ListProvider } from './contexts/List.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ListProvider>
        <App />
      </ListProvider>
    </React.StrictMode>
  </BrowserRouter>,
)
