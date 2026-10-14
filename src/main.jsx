import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Approutes from './routes/Approutes.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Approutes />
    <ToastContainer />
  </>
)
