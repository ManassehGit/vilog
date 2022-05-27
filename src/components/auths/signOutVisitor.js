import React, {useState, useRef} from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert2'; 
import date from 'date-and-time';
import { email } from 'react-admin';


const SignOutVisitor = () => {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    let emails = useSelector(state => state.visitors.visitorEmails);
    let now = new Date();
    let day = date.format(now, "YYYY-MM-DD");
    let time = date.format(now, "HH:mm:ss");
    

    const handleSignout = ({target}) => {
        setInput(target.value);
        if(input){
            setSuggestions(emails.filter(email => email.match(`${input}.*`)));
        }
        if(input.length === 1){
            setSuggestions([])
        }

        
      }
    
      const form = useRef();
    
      const sendEmail = (e) => {
        e.preventDefault();

        let username = input.split("@")[0];
        

          document.querySelector("#signoutEmail").value = "";
          
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
        <label for="signoutEmail" class="col-sm-8 col-form-label mt-4">Register for QR</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="signoutEmail" placeholder={`Kindly enter here ...`} onChange={handleSignout}/>
            <button type="submit" class="btn btn-outline-primary mt-2">Send</button>
          </div>
        </form>

        <div>
            <ul>
                {suggestions.map(item => <li>{item}</li>)}
            </ul>
        </div>
    </div>
  )
}

export default SignOutVisitor