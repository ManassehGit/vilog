import React, {useState, useRef} from 'react';
import { useSelector } from 'react-redux';
// import swal from 'sweetalert2'; 
// import date from 'date-and-time';
import SignOutCard from './signOutCard';


const SignOutVisitor = () => {
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    let visitors = useSelector(state => state.visitors.visitorList);
    // let now = new Date();
    // let day = date.format(now, "YYYY-MM-DD");
    // let time = date.format(now, "HH:mm:ss");
    

    const handleSignout = ({target}) => {
        setInput(target.value);
        if(input){
            setSuggestions(visitors.filter(visitor => visitor.email.match(`${input}.*`)));
        }
        if(input.length === 1){
            setSuggestions([])
        }
        
      }
    
      const form = useRef();
    
      
  return (
    <div>
        <form ref={form}>
        <label htmlFor="signoutEmail" className="col-sm-8 col-form-label mt-4">Visitor Logout</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="signoutEmail" placeholder={`Kindly enter here ...`} onChange={handleSignout}/>
          </div>
        </form>

        <div>
            {suggestions.map(item => <SignOutCard username={item.email} loginMethod={item.loginMethod} loginTime={item.timeIn} />)}
        </div>
    </div>
  )
}

export default SignOutVisitor