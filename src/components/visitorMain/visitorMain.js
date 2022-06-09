import React from 'react'
import Footer from '../footer/footer'
import Logo from '../logo/logo'

const VisitorMain = () => {
  return (
    <div>
        <nav className="navbar navbar-light bg-light">
            <div className='ms-5'><Logo width={"100"} /></div>
            <span className="navbar-text me-5">
            Admin Login
            </span>
        </nav>
    <div className='container'>
    <div className='m-5'>
    <div className="contaniner jumbotron">
        <h1 className="display-4">Visitor Login / Sign Out</h1>
        <p className="lead">Kindly select what you wish to do</p>
        <hr className="my-4" />
        
        <form className="form-inline">
        <div className="form-group mb-2">
            <label htmlFor="visitorselect" className="sr-only"></label>
            <input type="text" readOnly className="form-control-plaintext" id="visitorselect" value="Click below to select" />
        </div>
        <select className="form-control form-control-lg">
            <option>I am a visitor</option>
            <option>I am signing out</option>
            
        </select>
        </form>

    </div>
    </div>
    <Footer />
    </div>
    
    </div>
  )
}

export default VisitorMain

/* <form>
  <div className="form-row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name">
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name">
    </div>
  </div>
</form> */