import React,{useState, useRef} from 'react'
import NavBar from '../navBar/navBar'
import { useSelector } from 'react-redux';
import SignOutCard from '../auths/signOutCard';

const VisitorGuest = () => {
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
        <NavBar />
    <div className='container'>
    
    <div>
        <form ref={form}>
        <label htmlFor="signoutEmail" className="col-sm-8 col-form-label mt-4"><h1>Who would you be visiting</h1></label>
          <div className="col-sm-10">
            <input type="email" className="form-control form-control-lg" id="signoutEmail" placeholder={`Kindly enter here ...`} onChange={handleSignout}/>
          </div>
        </form>

        <div>
            {suggestions.map(item => <SignOutCard username={item.email} loginMethod={item.loginMethod} loginTime={item.timeIn} />)}
        </div>
    </div>

    </div>
    </div>
  )
}

export default VisitorGuest