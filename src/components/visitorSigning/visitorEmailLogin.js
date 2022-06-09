import React from 'react'
import Footer from '../footer/footer'
import NavBar from '../navBar/navBar'

const VisitorEmailLogin = () => {
  return (
    <div>
        <NavBar />
    <div className='container'>
    
    <form>
    
    <div  className="m-4">
    <div class="form-control m-2">
      <input type="text" class="form-control form-control-lg col-md-6" id="name" placeholder="Name"/>
    </div>
    </div>

    <div  className="m-4">
    <div class="form-control m-2">
      <input type="text" class="form-control form-control-lg col-md-6" id="company" placeholder="Company"/>
    </div>
    </div>

    <div  className="m-4">
    <div class="form-control m-2">
      <input type="text" class="form-control form-control-lg col-md-6" id="phone" placeholder="Phone"/>
    </div>
    </div>

    <div  className="m-4">
    <div class="form-control m-2">
      <input type="email" class="form-control form-control-lg col-md-6" id="email" placeholder="Email"/>
    </div>
    </div>
    
    
  <button type="submit" class="btn btn-primary">Continue</button>
</form>

    {/* <Footer /> */}
    </div>
    
    </div>
  )
}

export default VisitorEmailLogin