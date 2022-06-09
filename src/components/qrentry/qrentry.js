import React from 'react'
import {Link} from 'react-router-dom'

const QrEntry = () => {
  return (
    <div>
        <Link to={"/scanqr"}>
        <img src='qrimage.jpg' width={'200px'} alt='The QR code placeholder' id='qrimage'/>
        </Link>
        {/* <div>Click to sign in with QR</div> */}
    </div>
  )
}

export default QrEntry