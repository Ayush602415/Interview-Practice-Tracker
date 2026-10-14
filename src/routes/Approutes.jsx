import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from '../components/Dashboard'
import Questions from '../components/Questions'


const Approutes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard />
        },
        {
            path: "/questions",
            element: <Questions />
        }
    ])
  return (
    <RouterProvider router={router}/>
  )

}

export default Approutes