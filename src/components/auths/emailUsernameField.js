import React, {useState, useRef} from 'react'
import swal from 'sweetalert2'; 
import date from 'date-and-time';
import { useSelector, useDispatch } from 'react-redux';
import { addVisitor } from '../../store/visitorSlice';

const EmailUsernameField = ({text, choice}) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleText = ({target}) => {
    console.log(target, target.value);
    setInput(target.value);
    console.log(input)
  }

  const form = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    let now = new Date();
    let day = date.format(now, "YYYY-MM-DD");
    let time = date.format(now, "HH:mm:ss");
    try{
      dispatch(addVisitor({email: input, dateCurrent: day, timeIn: time, isLoggedIn: true, timeOut: null, loginMethod: choice}));
      document.querySelector("#emailUsername").value = "";
          
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

    let typeVal = text==="Email"? "email": "text";
  return (
    <div>
        <form ref={form} onSubmit={handleLogin}>
        <label for="emailUsername" class="col-sm-8 col-form-label mt-4">{text}</label>
          <div class="col-sm-10">
            <input type={typeVal} class="form-control" id="emailUsername" placeholder={`Kindly enter here ...`} onChange={handleText}/>
            <button type="submit" class="btn btn-outline-primary mt-2">Send</button>
          </div>
        </form>
    </div>
  )
}

export default EmailUsernameField

