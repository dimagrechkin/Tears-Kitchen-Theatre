'use client'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { ToastContainer } from 'react-toastify'

import { options } from './helpers/constant.js'
import './index.css'

const stripePromise = loadStripe(
  'pk_test_51I32C8Dzs7plZ4swbVNVj69gA8vcBOt4h4HsAwU4CAIhIanKMwJ6FHaIPR5Z6MTj20njowGSQWSTxJvOIcSrSTAB00m81bpexq'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Elements stripe={stripePromise} options={options}>
        <App />
        <ToastContainer draggable closeOnClick theme="dark" />
      </Elements>
    </React.StrictMode>
  </Provider>
)
