import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios';


const ListVisitors = () => {

  let visitors = useSelector(state => state.visitors.visitorEmails);

  const handleClick = async () => {
    try{
      let result = await axios.get("/users")

      let temp = await result.data;
      console.log(temp)
      return temp

    }catch(err){
      console.log(err)
    }
  }
  
  
  useEffect(() => {
    console.log(visitors)
  }, [visitors])
    

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