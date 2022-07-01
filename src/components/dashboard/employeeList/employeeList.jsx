import React, {useEffect, useState} from 'react';
// import { useSelector } from 'react-redux';
// import { getusers } from '../../functions/functions';
import axios from "axios";
import BaseDashboard from '../baseDashboard/baseDashboard';

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
        <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold">Employee Info</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="text-md-right dataTables_filter" id="dataTable_filter"><label><input type="search" class="form-control form-control-sm" aria-controls="dataTable" placeholder="Search" /></label></div>
                                </div>
                            </div>  
                            <div class="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <table class="table dataTable my-0" id="dataTable">
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
                                    <td>{data?.is_admin? "Admin Role" : "Employee"}</td>
                                  </tr>
                                  )
                                  }) }
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </BaseDashboard>
    </div>
  )
}

export default EmployeeList

// date.parse(now, , 'MMM DD YYYY')
// {console.log(date.parse(data.date_current.slice(0,10)))}