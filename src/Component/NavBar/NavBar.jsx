import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar">

      <div className="logo">
        SHOP<span>ZONE</span>
      </div>

      <ul className="nav-links">

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/product">Products</NavLink>
        </li>

        <li>
          <NavLink to="/login">Login</NavLink>
        </li>

        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>

      </ul>

    </nav>
  )
}

export default NavBar