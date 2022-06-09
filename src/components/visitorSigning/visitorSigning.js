import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/logo'
// import Footer from '../footer/footer'
import Qrreader from '../qrreader/qrreader'

const VisitorQRLogin = () => {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className='ms-5'><Logo width={"100"} /></div>
            <span className="navbar-text me-5">
            Admin Login
            </span>
        </nav>
    <div className='container'>
        <div className='mt-5'>
        <Qrreader />
        </div>
        <div className='mt-5'>
        <Link to="/">Go to the Homepage</Link>
        </div>
        </div>
    </div>
    
  )
}

export default VisitorQRLogin