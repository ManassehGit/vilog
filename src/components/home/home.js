import React from 'react';
import './home.css';
import NavButton from '../navButton/navButton';

const Home = () => {
  return (
    <div>
      <img src='viLog.png' alt='ViLog Logo' />
      <div>
      <NavButton role="login"/>
      <NavButton role="loginSignup"/>
      </div>
    </div>
  )
}

export default Home