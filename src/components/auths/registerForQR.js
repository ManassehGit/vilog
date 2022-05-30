import React, {useState, useRef} from 'react'
import swal from 'sweetalert';
import {sendVisitorQR} from '../mailing/sendMail';

  
  const RegisterForQR = () => {

    const [input, setInput] = useState("");

      const handleText = ({target}) => {
        console.log(target, target.value);
        setInput(target.value);
        console.log(input)
      }
    
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
        try{
          sendVisitorQR.sendQRMail(input);

          document.querySelector("#registerEmail").value = "";
          
          swal({
            title: "Successfully Sent Mail",
            text: "Kindly check mail for the QR code",
            icon: "success",
            button: "Ok",
          });
        }catch(err){
          console.log(err);
          swal({
            title: "Sorry could not register for QR",
            text: "Kindly check mail again and retry",
            icon: "error",
            button: "Ok",
          });
        }
    
        
          
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