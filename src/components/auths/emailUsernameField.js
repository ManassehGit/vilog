import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';

const EmailUsernameField = ({text}) => {
  const [input, setInput] = useState("");

  const handleText = ({target}) => {
    console.log(target, target.value);
    setInput(target.value);
    console.log(input)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let public_key = "eNDvYA3W7CSZFspDG";

    emailjs.sendForm('qr_code', 'qr_login', form.current, public_key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    let typeVal = text==="Email"? "email": "text";
  return (
    <div>
        <form ref={form} onSubmit={sendEmail}>
        <label for="staticEmail" class="col-sm-8 col-form-label mt-4">{text}</label>
          <div class="col-sm-10">
            <input type={typeVal} class="form-control" id="staticEmail" placeholder={`Kindly enter here ...`} onChange={handleText}/>
            <button type="submit" class="btn btn-outline-primary mt-2">Send</button>
          </div>
        </form>
    </div>
  )
}

export default EmailUsernameField

