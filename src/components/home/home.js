import React from 'react';
import './home.css';
import NavButton from '../navButton/navButton';
import Logo from '../logo/logo';
import { useSelector } from 'react-redux';

const Home = () => {

      let visitors = useSelector(state => state.visitors.visitorEmails);
      console.log(visitors)
      // npm run build && (cd server && npm start)
      // "start-client": "react-scripts start",
      // set PORT=3000 && react-scripts start

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