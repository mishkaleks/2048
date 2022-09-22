// base
import React from 'react'
import ReactDOM from 'react-dom/client'

// components
import App from './components/App/index'
import FontLoader from './components/FontLoader'

// styles
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <FontLoader fontFamily="Goldman" />
    <App />
  </>
)
