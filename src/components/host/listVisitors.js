import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios';
import {getVisitors} from '../../functions/functions';


const ListVisitors = () => {

  let visitors = useSelector(state => state.visitors.visitorEmails);
  let dbvisitors = getVisitors();
  let items = dbvisitors.then(visitor => console.log(visitor)).catch((err) => {console.log(err)})
  console.log("database visitors----", items )
  
  
  const handleClick = async () => {
    try{
      let result = await axios.get("/users")
      

      let temp = await result.data;
      console.log("temp-----",temp)
      return temp

    }catch(err){
      console.log(err)
    }
  }
  
  
  useEffect(() => {
    console.log(visitors)
    console.log(dbvisitors)
  }, [visitors, dbvisitors])
    

  return (
    <div>
        <ul>
            {visitors.map((visitor, id) => <li key={id}>{visitor}</li>)}
        </ul>
        <button onClick={handleClick}>Check</button>
    </div>
  )
}

export default ListVisitors