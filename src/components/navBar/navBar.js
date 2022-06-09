import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/logo'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className='ms-5'><Logo width={"100"} /></div>
            <span className="navbar-text me-5">
            <Link to="/login">Admin Login</Link>
            </span>
        </nav>
    </div>
  )
}

export default NavBar