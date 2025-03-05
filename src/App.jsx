import { useState } from 'react'
// import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider , Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import About from "./components/About"
import User from "./components/User"

function App() {

  const router = createBrowserRouter([
      {
        path : "/", 
        element : <> <Navbar/> <Home/></>,
      },
      {
        
        path : "/about",
        element :<> <Navbar/> <About/></> ,
      },
      {
        path : "/login",
        element :<> <Navbar/><Login/></> ,
      },
      {
        path : "/user/:usename",
        element :<> <Navbar/><User/></> ,
      },
     
    ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App;
