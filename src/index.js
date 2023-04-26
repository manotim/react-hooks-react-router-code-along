import React from 'react'
import ReactDOM from 'react-dom'
// Step 1. Import react-router functions
import { BrowserRouter } from 'react-router-dom'
import App from './Components/App'

// Step 2. Change so router is coordinating what is displayed
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
