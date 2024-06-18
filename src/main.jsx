'use client'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import { ToastContainer } from 'react-toastify'
import './index.css'

const stripePromise = await loadStripe(
  'pk_test_51I32C8Dzs7plZ4swbVNVj69gA8vcBOt4h4HsAwU4CAIhIanKMwJ6FHaIPR5Z6MTj20njowGSQWSTxJvOIcSrSTAB00m81bpexq'
)

const options = {
  mode: 'payment',
  amount: 50,
  currency: 'usd',
  appearance: {
    theme: 'flat',
    variables: {
      fontFamily: 'Verdana',
      fontLineHeight: '1.5',
      borderRadius: '0',
      colorBackground: '#fff',
      focusBoxShadow: 'none',
      focusOutline: '-webkit-focus-ring-color auto 1px',
      tabIconSelectedColor: 'var(--colorText)',
    },
    rules: {
      '.Input, .CheckboxInput, .CodeInput': {
        transition: 'none',
        boxShadow: 'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080',
      },
      '.Input': {
        padding: '12px',
      },
      '.Input--invalid': {
        color: '#DF1B41',
      },
      '.Tab, .Block, .PickerItem--selected': {
        backgroundColor: '#dfdfdf',
        boxShadow: 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
      },
      '.Tab': {
        transition: 'none',
      },
      '.Tab:hover': {
        backgroundColor: '#eee',
      },
      '.Tab--selected, .Tab--selected:focus, .Tab--selected:hover': {
        color: 'var(--colorText)',
        backgroundColor: '#ccc',
      },
      '.Tab:focus, .Tab--selected:focus': {
        boxShadow: 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
        outline: 'none',
      },
      '.Tab:focus-visible': {
        outline: 'var(--focusOutline)',
      },
      '.PickerItem': {
        backgroundColor: '#dfdfdf',
        boxShadow: 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px #808080, inset 2px 2px #dfdfdf',
        transition: 'none',
      },
      '.PickerItem:hover': {
        backgroundColor: '#eee',
      },
      '.PickerItem--highlight': {
        outline: '1px solid blue',
      },
      '.PickerItem--selected:hover': {
        backgroundColor: '#dfdfdf',
      },
    },
  },
}

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
