import React, {useState} from 'react'
import Logo from '../logo/logo'
import VisitorInput from './visitorInput';


const VisitorLogin = () => {
  const [choice, setChoice] = useState("");

  const handleChoice = ({target}) => {
    console.log(target, target.value);
    setChoice(target.value);
  }

  

  return (
    <div>

<Logo width="200" classNameAdd="my-6 m-md-4"/>
<div class="d-flex justify-content-center">
        
        <div class="jumbotron jumbotron-fluid border col-md-6">
          <div class="container">
            <h1 class="display-3">Visitor Login</h1>
            <p class="lead">Welcome to ViLog</p>
            <hr class="my-2" />
           
            <div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button class="nav-link active" id="v-pills-signin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-signin" type="button" role="tab" aria-controls="v-pills-signin" aria-selected="true">Sign In</button>
    <button class="nav-link" id="v-pills-signout-tab" data-bs-toggle="pill" data-bs-target="#v-pills-signout" type="button" role="tab" aria-controls="v-pills-signout" aria-selected="false">Sign Out</button>
    
  </div>
  <div class="tab-content" id="v-pills-tabContent">
    <div class="tab-pane fade show active" id="v-pills-signin" role="tabpanel" aria-labelledby="v-pills-signin-tab" tabindex="0">
    <div class="mb-3 row">

{/*  */}
    <div className="col-12 d-flex flex-column justify-content-center align-items-start">
    <div class="form-check">
  <input class="form-check-input" type="radio" name="loginVisitor" id="loginEmail" value="email" onChange={handleChoice} />
  <label class="form-check-label" for="loginEmail">
    Login with Email
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="loginVisitor" id="loginUsername" value="username" onChange={handleChoice} />
  <label class="form-check-label" for="loginUsername">
    Login with  Username
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="loginVisitor" id="signInQR" value="qrcode" onChange={handleChoice} />
  <label class="form-check-label" for="signInQR">
    Sign in with QR Code
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="loginVisitor" id="registerQR" value="register" onChange={handleChoice} />
  <label class="form-check-label" for="registerQR">
    Register for QR Code
  </label>
</div>
</div>
{/*  */}

          <VisitorInput choice={choice}/>

      </div>
    </div>
    <div class="tab-pane fade" id="v-pills-signout" role="tabpanel" aria-labelledby="v-pills-signout-tab" tabindex="0">
    <div class="mb-3 row">
          <label for="staticEmail" class="col-sm-8 col-form-label">Email/Username</label>
          <div class="col-sm-10">
            <input type="text" readonly class="form-control" id="staticEmail" />
          </div>
        </div>
    </div>
    
  </div>
</div>

          </div>
        </div>
      </div>


      














    </div>
  )
}

export default VisitorLogin