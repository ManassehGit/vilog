import React from 'react'
import SignOutVisitor from '../auths/signOutVisitor'
import Footer from '../footer/footer'
import NavBar from '../navBar/navBar'


const VisitorLogout = () => {
  return (
    <div>
        <NavBar />
    <div className='container'>
    <div className='m-5'>
        <SignOutVisitor />
    </div>
    <Footer />
    </div>
    
    </div>
  )
}

export default VisitorLogout
