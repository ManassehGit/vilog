import React from 'react'
import Logo from '../logo/logo'
import { Link } from 'react-router-dom'

const HostSignup = () => {
  return (
    <div>
        <Logo width="200" classNameAdd="m-4"/>
      <div class="d-flex justify-content-center">
        <div class="jumbotron jumbotron-fluid border col-md-6">
          <div class="container">
            <h1 class="display-3">Host/Admin Signup</h1>
            <p class="lead">Sign Up with ViLog</p>
            <hr class="my-2" />
          

            <form>
        <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control" id="staticEmail" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div class="mb-3 row">
        <label for="adminStatus" class="col-sm-2 col-form-label">Admin Status</label>
          <div class="col-sm-10">
            <input class="form-check-input" type="checkbox" value="" id="adminStatus" />
            <span className='mx-3'>Yes I am an admin</span>
          </div>
        </div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
        <p class="lead">
              <button class="btn btn-primary btn-md" href="Jumbo action link">Create Account</button>
            </p>
        </form>

            
          </div>
          
        </div>        
      </div>
    </div>
  )
}

export default HostSignup

