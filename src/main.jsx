'use client'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'

import { ToastContainer } from 'react-toastify'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ToastContainer draggable closeOnClick theme="dark" />
    </React.StrictMode>
  </Provider>
)
