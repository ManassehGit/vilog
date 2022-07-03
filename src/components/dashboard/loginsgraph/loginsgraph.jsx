import React from 'react'
import LineChart from './lineChart'

const LoginsGraph = () => {
  return (
    <div className="col-lg-7 col-xl-8">
                            <div className="card shadow mb-4">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h6 className="text-primary font-weight-bold m-0">Visitor Loggins for the Year</h6>
                                    <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false" type="button"><i className="fas fa-ellipsis-v text-gray-400"></i></button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <LineChart />
                                </div>
                            </div>
     </div>
  )
}

export default LoginsGraph