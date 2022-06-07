import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/logo'
import {getUsers} from '../../functions/functions';


const HostLogin = () => {
  return (
    <div>

      <Logo width="200" classNameAdd="m-4"/>
      <div class="d-flex justify-content-center">
        <div class="jumbotron jumbotron-fluid border col-md-6">
          <div class="container">
            <h1 class="display-3">Host/Admin Login</h1>
            <p class="lead">Welcome to ViLog</p>
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
        <p>
          Not having an account? <Link to="/signup">Sign Up</Link>
        </p>
        <p class="lead">
              <button class="btn btn-primary btn-md" href="Jumbo action link">Sign In</button>
            </p>
        </form>

            
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default HostLogin