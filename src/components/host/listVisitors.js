import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios';
import {getVisitors, getUsers} from '../../functions/functions';

const ListVisitors = () => {
  let visitors = useSelector(state => state.visitors.visitorEmails);

  const getTheVisitors = async () => {
    let dbvisitors = await getVisitors();
    let result = await dbvisitors;
    return result;
  }
  
  let dbvisitors = getTheVisitors();
  console.log("llllll--------", dbvisitors)
  
  
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