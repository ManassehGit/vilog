import React, {useState, useRef} from 'react'
import swal from 'sweetalert2';
import {sendMail} from '../../functions/functions';
  
  const RegisterForQR = () => {

    const [input, setInput] = useState("");

      const handleText = ({target}) => {
        setInput(target.value);
      }
    
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();
        try{
          // sendVisitorQR.sendQRMail(input);
          sendMail(input);

          document.querySelector("#registerEmail").value = "";
          
          swal.fire({
            title: `Successfully Sent Mail to ${input}`,
            text: "Kindly check mail for the QR code",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }catch(err){
          console.log(err);
          swal.fire({
            title: "Sorry could not register for QR",
            text: "Kindly check mail again and retry",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
    
        
          
      };

      
    return (
        <div>
        <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="staticEmail" className="col-sm-8 col-form-label mt-4">Register for QR</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="registerEmail" placeholder={`Kindly enter here ...`} onChange={handleText}/>
            <button type="submit" className="btn btn-outline-primary mt-2">Send</button>
          </div>
        </form>
    </div>
    )
  }
  
  export default RegisterForQR