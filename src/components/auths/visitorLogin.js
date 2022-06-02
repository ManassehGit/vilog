import React, {useState} from 'react'
import Logo from '../logo/logo'
import VisitorInput from './visitorInput';
import SignOutVisitor from './signOutVisitor';


const VisitorLogin = () => {
  const [choice, setChoice] = useState("");

  const handleChoice = ({target}) => {
    console.log(target, target.value);
    setChoice(target.value);
  }

  

  return (
    <div>

<Logo width="200" classNameAdd="my-6 m-md-4"/>
<div className="d-flex justify-content-center">
        
        <div className="jumbotron jumbotron-fluid border col-md-6">
          <div className="container">
            <h1 className="display-3">Visitor Login</h1>
            <p className="lead">Welcome to ViLog</p>
            <hr className="my-2" />
           
            <div className="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button className="nav-link active" id="v-pills-signin-tab" data-bs-toggle="pill" data-bs-target="#v-pills-signin" type="button" role="tab" aria-controls="v-pills-signin" aria-selected="true">Sign In</button>
    <button className="nav-link" id="v-pills-signout-tab" data-bs-toggle="pill" data-bs-target="#v-pills-signout" type="button" role="tab" aria-controls="v-pills-signout" aria-selected="false">Sign Out</button>
    
  </div>
  <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-signin" role="tabpanel" aria-labelledby="v-pills-signin-tab" tabIndex="0">
    <div className="mb-3 row">

{/*  */}
    <div className="col-12 d-flex flex-column justify-content-center align-items-start">
    <div className="form-check">
  <input className="form-check-input" type="radio" name="loginVisitor" id="loginEmail" value="email" onChange={handleChoice} />
  <label className="form-check-label" htmlFor="loginEmail">
    Login with Email
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="loginVisitor" id="loginUsername" value="username" onChange={handleChoice} />
  <label className="form-check-label" htmlFor="loginUsername">
    Login with  Username
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="loginVisitor" id="signInQR" value="qrcode" onChange={handleChoice} />
  <label className="form-check-label" htmlFor="signInQR">
    Sign in with QR Code
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="loginVisitor" id="registerQR" value="register" onChange={handleChoice} />
  <label className="form-check-label" htmlFor="registerQR">
    Register for QR Code
  </label>
</div>
</div>
{/*  */}

          <VisitorInput choice={choice}/>

      </div>
    </div>
    <div className="tab-pane fade" id="v-pills-signout" role="tabpanel" aria-labelledby="v-pills-signout-tab" tabIndex="0">
    <div className="mb-3 row">
          <SignOutVisitor choice={choice}/>
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