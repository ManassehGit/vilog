import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../logo/logo'

const HostLogin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    alert("Hello there")
    navigate('/dashboard')
  }

  return (
    <div>

      <Logo width="200" classNameAdd="m-4"/>
      <div className="d-flex justify-content-center">
        <div className="jumbotron jumbotron-fluid border col-md-6">
          <div className="container">
            <h1 className="display-3">Host/Admin Login</h1>
            <p className="lead">Welcome to ViLog</p>
            <hr className="my-2" />
          

            <form>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="staticEmail" />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword" />
          </div>
        </div>
        <p>
          Not having an account? <Link to="/signup">Sign Up</Link>
        </p>
        <button type="submit" class="btn btn-primary" onClick={handleClick}>Sign In</button>
        </form>

            
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default HostLogin