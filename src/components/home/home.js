import React from 'react';
import './home.css';
import NavButton from '../navButton/navButton';
import Logo from '../logo/logo';

const Home = () => {
  return (
    <div>
      <Logo />
      <div>
      <NavButton role="login"/>
      <NavButton role="loginSignup"/>
      </div>
    </div>
  )
}

export default Home