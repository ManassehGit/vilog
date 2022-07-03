import React from 'react'
import { Link } from 'react-router-dom'

const dashheader = () => {
  return (
    <div class="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 class="text-dark mb-0">Dashboard</h3><Link className="btn btn-primary btn-sm d-none d-sm-inline-block" role="button" to="#"><i class="fas fa-download fa-sm text-white-50"></i>&nbsp;Generate Report</Link>
    </div>
  )
}

export default dashheader