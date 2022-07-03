import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
  return (
<nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                    <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle mr-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                        
                        <ul className="nav navbar-nav flex-nowrap ml-auto">
                            <div className="d-none d-sm-block topbar-divider"></div>
                            <li className="nav-item dropdown no-arrow" role="presentation">
                                <div className="nav-item dropdown no-arrow"><Link className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" to="#"><span className="d-none d-lg-inline mr-2 text-gray-600 small">ViLog Host</span></Link>
                                    <div className="dropdown-menu shadow dropdown-menu-right animated--grow-in"
                                        role="menu"><Link className="dropdown-item" role="presentation" to="/dashprofile"><i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Profile</Link>
                                        <Link className="dropdown-item" role="presentation" to="/"><i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Homepage</Link>
                                        <div className="dropdown-divider"></div><Link className="dropdown-item" role="presentation" to="/login"><i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>&nbsp;Logout</Link></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>  
    )
}

export default TopNav