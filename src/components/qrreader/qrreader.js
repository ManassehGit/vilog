import React, {useState} from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import adapter from 'webrtc-adapter'
import Html5QrcodePlugin from './html5QRPlugin'

const Qrreader = (props) => {
    const [qrscan, setQrscan] = useState('No result');
    
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }

    function onNewScanResult(decodedText, decodedResult) {
        // Handle the result here.
    }

  return (
    <>
    <Html5QrcodePlugin 
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}/>
    
    </>
  )
}

export default Qrreader