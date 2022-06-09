import React from 'react'
// import TextareaAutosize from '@mui/material/TextareaAutosize'
// import adapter from 'webrtc-adapter'
import Html5QrcodePlugin from './html5QRPlugin'
import swal from 'sweetalert2'; 
import date from 'date-and-time';
import { addVisitor } from '../../store/visitorSlice';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';


const Qrreader = (props) => {
    let qrscan = 'No result';
    let captured = false;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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
        dispatch(addVisitor({email: qrscan, dateCurrent: day, timeIn: time, isLoggedIn: true, timeOut: null, loginMethod: "qrcode"}));
            
            swal.fire({
              title: `${qrscan} logged in successfully`,
              text: "Welcome to the organization, feel at home",
              icon: "success",
              confirmButtonText: "Ok",
            });
            qrscan = "";
            captured = false;
            navigate('/visitormain')
      }catch(err){
        console.log(err)
      }      
    };
    
    // const handleError = err => {
    // console.error(err)
    // }

    function onNewScanResult(decodedText, decodedResult) {
        // Handle the result here.
        if(decodedText && (captured===false)){
          qrscan = decodedText;
          console.log(decodedText);
          captured = true;

          handleLogin();
        }
        return decodedText;
    }

  return (
    <>
    {captured === false? <Html5QrcodePlugin 
                fps={10}
                qrbox={350}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}/>
                :
                ""
    }
    
    </>
  )
}

export default Qrreader