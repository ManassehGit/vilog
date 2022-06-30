import React from 'react'

const InfoCard = () => {
  return (
    <div>
        <div class="col-md-6 col-xl-3 mb-4">
                            <div class="card shadow border-left-primary py-2">
                                <div class="card-body">
                                    <div class="row align-items-center no-gutters">
                                        <div class="col mr-2">
                                            <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Number of Employees</span></div>
                                            <div class="text-dark font-weight-bold h5 mb-0"><span>400</span></div>
                                        </div>
                                        <div class="col-auto"><i class="material-icons fa-2x text-gray-300">confirmation_number</i></div>
                                    </div>
                                </div>
                            </div>
            </div>
    </div>
  )
}

export default InfoCard