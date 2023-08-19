import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Functionalities: use hooks to render the initial state 
// Create as state to handle state changes for the the link generations and to avoid the page refreshing
// Also if the user triggers the refresh button, the page contents should be the same as the initial state
// A function to handle the form validation
// Another fuunction to handle the copy function
