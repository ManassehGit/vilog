
import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
// import { getVisitors } from '../../functions/functions';
import axios from "axios";

const Dashboard = () => {
  let visitors = useSelector(state => state.visitors.visitorEmails);
  const [users, setUsers] = useState([]);


  const getUsers = async () => {
    try{
        let res = await axios.get("https://vilogserver.herokuapp.com/users")
        let records =  res.data.rows;
        
          // setUsers(records)        
        return records;

        
        
    }catch(err){
        console.log(err)
    }
}

useEffect(() => {

  let tmp = getUsers();
  console.log("temp",tmp);
  setUsers(tmp);

  return () => {

  }
}, [])

// console.log(users)
// console.log("users chekc", typeof users)
// for(let i in users){
//   console.log(i)
// }

  return (
    <div>
      Work on dashboard
      {visitors?.map((person,index) => <li key={index}>{person}</li>) }
    </div>
  )
}

// {visitors?.map(person => <li>{person}</li>)}

export default Dashboard