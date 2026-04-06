import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Login from './Login'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Register from './Register'
import './App.css'
import DashBoard from './DashBoard'

function App() {
  const router = createBrowserRouter([
    {
    path : "/",
    element:<Login />
    },
    {
      path : "/register",
      element : <Register />
    },
    {
      path : "/dashboard",
      element : <DashBoard />
    }

  ])

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
