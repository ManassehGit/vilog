import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import QRCode from 'qrcode';
import swal from 'sweetalert';

  
  const RegisterForQR = () => {

    const [input, setInput] = useState("");
    const [data, setData] = useState();


    const generateQR = text => {
      QRCode.toDataURL(text)
      .then(url => {
        console.log(url)
        setData(url);
        console.log("data",url)
      })
      .catch(err => {
        console.error(err)
      })
      }
    
      // generateQR("manasseh.sarfo@amalitech.org");

      const handleText = ({target}) => {
        console.log(target, target.value);
        setInput(target.value);
        console.log(input)
      }
    
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();

        let username = input.split("@")[0];

        generateQR(input);
        console.log("datum",data)
    
        // let public_key = "eNDvYA3W7CSZFspDG";
    
        // emailjs.send('qr_code', 'qr_login', {to_name: username, message: data}, public_key)
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        

          document.querySelector("#registerEmail").value = "";
          
          swal({
            title: "Successfully Sent Mail",
            text: "Kindly check mail for the QR code",
            icon: "success",
            button: "Ok",
          });
          
      };

      
    return (
        <div>
        <form ref={form} onSubmit={sendEmail}>
        <label for="staticEmail" class="col-sm-8 col-form-label mt-4">Register for QR</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="registerEmail" placeholder={`Kindly enter here ...`} onChange={handleText}/>
            <button type="submit" class="btn btn-outline-primary mt-2">Send</button>
          </div>
        </form>
    </div>
    )
  }
  
  export default RegisterForQR