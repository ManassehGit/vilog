import React, {useState} from 'react'
// import TextareaAutosize from '@mui/material/TextareaAutosize'
// import adapter from 'webrtc-adapter'
import Html5QrcodePlugin from './html5QRPlugin'
import swal from 'sweetalert2'; 
import date from 'date-and-time';
import { addVisitor } from '../../store/visitorSlice';


const Qrreader = (props) => {
    const [qrscan, setQrscan] = useState('No result');
    
    // const handleScan = data => {
    //     if (data) {
    //         setQrscan(data)
    //     }
    // }

    const handleLogin = (e) => {
      e.preventDefault();
  
      let now = new Date();
      let day = date.format(now, "YYYY-MM-DD");
      let time = date.format(now, "HH:mm:ss");
      try{
        dispatch(addVisitor({email: input, dateCurrent: day, timeIn: time, isLoggedIn: true, timeOut: null, loginMethod: choice}));
            
            swal.fire({
              title: `${input} logged in successfully`,
              text: "Welcome to the organization, feel at home",
              icon: "success",
              confirmButtonText: "Ok",
            });
      }catch(err){
        console.log(err)
      }      
    };
    
    // const handleError = err => {
    // console.error(err)
    // }

    function onNewScanResult(decodedText, decodedResult) {
        // Handle the result here.
        if(decodedText){
          setQrscan(decodeText);

        }
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