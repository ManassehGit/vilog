import React from 'react'
import Footer from '../footer/footer'
import NavBar from '../navBar/navBar'
import { useNavigate } from 'react-router-dom'

const VisitorMain = () => {

  const navigate = useNavigate();
  
  let handleChoice = (e) => {
    let choice =  e.target.value;
    console.log("yhh", choice)
    switch(choice){
      case "login": 
      navigate("/visitorlogin");
      break;
      case "signout":
        navigate("/visitorlogout");
      break;
      default:
        navigate("/visitormain")
    }
  }
  return (
    <div>
        <NavBar />
    <div className='container'>
    <div className='m-5'>
    <div className="contaniner jumbotron">
        <h1 className="display-4">Visitor Login / Sign Out</h1>
        <p className="lead">Kindly select what you wish to do</p>
        <hr className="my-4" />
        
        <form className="form-inline">
        <div className="form-group mb-2">
            <label htmlFor="visitorselect" className="sr-only">Click below to select</label>
        </div>
        <select className="form-control form-control-lg" name="visitormain" onChange={handleChoice}>
            <option value="">Kindly select an option</option>
            <option value="login">I am a visitor</option>
            <option value="signout">I am signing out</option>
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

