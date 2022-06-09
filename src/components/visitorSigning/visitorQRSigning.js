import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../navBar/navBar'
// import Footer from '../footer/footer'
import Qrreader from '../qrreader/qrreader'

const VisitorQRLogin = () => {
  return (
    <div>
        <NavBar />
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