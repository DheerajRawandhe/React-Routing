import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <>
    {/* <h1>React Routing</h1> */}

    <nav>
      <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/"><li>Home</li></NavLink>
      <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/about"><li>About</li></NavLink>
      <NavLink className={(e)=>{return e.isActive? "red" : ""}} to="/login"><li>Login</li></NavLink>
    </nav>
    </>
  )
}

