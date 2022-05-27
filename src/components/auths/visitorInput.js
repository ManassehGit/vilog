import React from 'react'
// import Qrreader from '../qrreader/qrreader'
// import QrScanner from '../qrreader/qrScanner'
import EmailUsernameField from './emailUsernameField'
import RegisterForQR from './registerForQR'

const VisitorInput = ({choice}) => {
  return (
    <div>
      { choice === "email" && <EmailUsernameField text="Email"/> }
      { choice === "username" && <EmailUsernameField text="Username"/> }
      { choice === "register" && <RegisterForQR /> }
      { choice === "qrcode" && <EmailUsernameField /> }
    </div>
  )
}

export default VisitorInput