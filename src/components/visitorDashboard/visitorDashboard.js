import React, {useEffect, useState} from 'react';
// import { useSelector } from 'react-redux';
// import { getVisitors } from '../../functions/functions';
import axios from "axios";
import BaseDashboard from '../dashboard/baseDashboard/baseDashboard';

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
                                </table>
                            </div>
                        </div>
                    </div>
        </BaseDashboard>
    </div>
  )
}

export default VisitorDashboard

// date.parse(now, , 'MMM DD YYYY')
// {console.log(date.parse(data.date_current.slice(0,10)))}