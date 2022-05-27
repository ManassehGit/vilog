import React from 'react';
import './home.css';
import NavButton from '../navButton/navButton';
import Logo from '../logo/logo';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Home = () => {

      let visitors = useSelector(state => state.visitors.visitorEmails);
      console.log(visitors)
      const check = async () => {
        let result = await axios.post("/addUser", {
          firstname: "Bernard",
          password: "http",
          department: "IT"
        })
      let temp = await result.data;
      console.log(temp)
      }

      check();
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