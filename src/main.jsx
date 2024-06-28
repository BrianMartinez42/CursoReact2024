import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.js'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
