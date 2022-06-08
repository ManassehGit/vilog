import React from 'react'
import Footer from '../footer/footer'
import Logo from '../logo/logo'
import NavButton from '../navButton/navButton'


const Welcome = () => {
  return (
    <div>
        <Logo width={'500'}/>
        <div>
            <h1>Welcome</h1>
            <NavButton role="visitormain"/>
        </div>
        <Footer />
    </div>
  )
}

export default Welcome