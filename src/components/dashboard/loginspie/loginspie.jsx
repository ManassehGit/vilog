import React from 'react'
import PieChart from './pieChart'

const LoginsPie = () => {
  return (
    <div className="col-lg-5 col-xl-4">
                            <div className="card shadow mb-4">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h6 className="text-primary font-weight-bold m-0">Visitor Login Methods</h6>
                                </div>
                                <div className="card-body">
                                    <PieChart />
                            </div>
                        </div>
    </div>
  )
}

export default LoginsPie