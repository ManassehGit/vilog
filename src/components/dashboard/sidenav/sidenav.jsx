import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div className="container-fluid d-flex flex-column p-0">
                <Link className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" to="#">
                    <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-book"></i></div>
                    <div className="sidebar-brand-text mx-3"><span>Vilog</span></div>
                </Link>
                <hr className="sidebar-divider my-0" />
                <ul className="nav navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item" role="presentation"><Link className="nav-link active" to="/dashboard"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link" to="/dashprofile" ><i className="fas fa-user"></i><span>Profile</span></Link></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link" to="/employeelist"><i className="fas fa-table"></i><span>Employees</span></Link></li>
                    <li className="nav-item" role="presentation"></li>
                    <li className="nav-item" role="presentation"><Link className="nav-link" to="/visitordashboard"><i className="fas fa-user-circle"></i>Visitors</Link></li>
                </ul>
                <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
            </div>
    </nav>
  )
}

export default SideNav