import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
)
