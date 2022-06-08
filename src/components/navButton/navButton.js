import React from 'react';
import './navButton.css';
import { useNavigate } from 'react-router-dom';


const NavButton = ({role}) => {
    const navigate = useNavigate();
    let roleText = "";
    if(role === "login"){
      roleText = "Host/Admin";
    }else if(role === "loginSignup"){
      roleText = "Visitor";
    }else{
      roleText = "Start Here";
    }

    const handleClick = () => {
        navigate(role);
    }

  return (
    <div style={{margin: "2em"}} onClick={handleClick}>
      <div className="svg-wrapper">
      <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" height="60" width="320" />
      </svg>
      <div className="text">{roleText}</div>
    </div>
    </div>
  )
}

export default NavButton