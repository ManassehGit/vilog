
import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
// import { getVisitors } from '../../functions/functions';
import axios from "axios";
import { Table } from 'react-bootstrap';

const Dashboard = () => {
  let visitors = useSelector(state => state.visitors.visitorEmails);
  const [users, setUsers] = useState([]);  

useEffect(() => {
  axios.get("http://vilogserver.herokuapp.com/users")
        .then(response => {
          setUsers(response.data);
        })
}, [])
console.log(users)


// console.log(users)
// console.log("users chekc", typeof users)
// for(let i in users){
//   console.log(i)
// }

  return (
    <div>
      Work on dashboard
      {visitors?.map((person,index) => <li key={index}>{person}</li>) }
      
          <div className='container'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
              {users.map((data) => {
                return (
                <tr>
                  <td>{data.username}</td>
                  <td>{data.user_password}</td>
                  <td>{data.department}</td>
                  <td>{data?.is_admin || "Not an Admin"}</td>
                </tr>
                 )
                }) }
              </tbody>
            </Table>
          </div>
       
    </div>
  )
}

// {visitors?.map(person => <li>{person}</li>)}

export default Dashboard