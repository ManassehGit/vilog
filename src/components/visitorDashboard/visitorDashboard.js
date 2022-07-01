import React, {useEffect, useState} from 'react';
// import { useSelector } from 'react-redux';
// import { getVisitors } from '../../functions/functions';
import axios from "axios";
import BaseDashboard from '../dashboard/baseDashboard/baseDashboard';
import { Table } from 'react-bootstrap';


const VisitorDashboard = () => {
    // let currentVisitors = useSelector(state => state.visitors.visitorEmails);
    const [visitors, setVisitors] = useState([]);  

useEffect(() => {
  axios.get("http://vilogserver.herokuapp.com/visitors")
        .then(response => {
          setVisitors(response.data);
        })
}, [])
console.log(visitors)

  return (
    <div>
        <BaseDashboard>
        <div className='container'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Login Date</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                  <th>Login Method</th>
                </tr>
              </thead>
              <tbody>
              {visitors.map((data) => {
                return (
                <tr>
                  <td>{data?.username}</td>
                  <td>{data.date_current.slice(0,10)}</td>
                  <td>{data?.time_in}</td>
                  <td>{data?.time_out}</td>
                  <td>{data?.login_method}</td>
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

export default VisitorDashboard

// date.parse(now, , 'MMM DD YYYY')
// {console.log(date.parse(data.date_current.slice(0,10)))}