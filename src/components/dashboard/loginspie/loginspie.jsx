import React from 'react'
import PieChart from './pieChart'

const LoginsPie = () => {
  return (
    <div class="col-lg-5 col-xl-4">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex justify-content-between align-items-center">
                                    <h6 class="text-primary font-weight-bold m-0">Visitor Login Methods</h6>
                                </div>
                                <div class="card-body">
                                    <PieChart />
                            </div>
                        </div>
    </div>
  )
}

export default LoginsPie