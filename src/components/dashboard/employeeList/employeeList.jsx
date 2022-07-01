import React, {useEffect, useState} from 'react';
// import { useSelector } from 'react-redux';
// import { getusers } from '../../functions/functions';
import axios from "axios";
import BaseDashboard from '../baseDashboard/baseDashboard';
import { Table } from 'react-bootstrap';


const EmployeeList = () => {
    // let currentusers = useSelector(state => state.users.visitorEmails);
    const [users, setUsers] = useState([]);  

useEffect(() => {
  axios.get("http://vilogserver.herokuapp.com/users")
        .then(response => {
          setUsers(response.data);
        })
}, [])
console.log(users)

  return (
    <div>
        <BaseDashboard>
        <div className='container'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Department</th>
                  <th>Admin Status</th>
                </tr>
              </thead>
              <tbody>
              {users.map((data) => {
                return (
                <tr>
                  <td>{data.username}</td>
                  <td>{data.department}</td>
                  <td>{data?.is_admin || "Not an Admin"}</td>
                </tr>
                 )
                }) }
              </tbody>
            </Table>
          </div>
        </BaseDashboard>
    </div>
  )
}

export default EmployeeList

// date.parse(now, , 'MMM DD YYYY')
// {console.log(date.parse(data.date_current.slice(0,10)))}