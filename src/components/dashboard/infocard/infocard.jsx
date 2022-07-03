import React from 'react'

const InfoCard = () => {
  return (
    <>
        <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card shadow border-left-primary py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col mr-2">
                                            <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Number of Employees</span></div>
                                            <div className="text-dark font-weight-bold h5 mb-0"><span>400</span></div>
                                        </div>
                                        <div className="col-auto"><i className="material-icons fa-2x text-gray-300">confirmation_number</i></div>
                                    </div>
                                </div>
                            </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-4">
                            <div className="card shadow border-left-primary py-2">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col mr-2">
                                            <div className="text-uppercase text-primary font-weight-bold text-xs mb-1"><span>Number of Visitors Today</span></div>
                                            <div className="text-dark font-weight-bold h5 mb-0"><span>85</span></div>
                                        </div>
                                        <div className="col-auto"><i className="material-icons fa-2x text-gray-300">confirmation_number</i></div>
                                    </div>
                                </div>
                            </div>
            </div>
    </>
  )
}

export default InfoCard