import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>


            <header className="p-2 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" className="d-flex navbar-brand align-items-center me-4 mb-2 mb-lg-0 text-warning text-decoration-none">
                            TextFun
                        </Link>

                        {/* <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
                            <li><Link to="/features" className="nav-link px-2 text-white">Features</Link></li>
                            <li><Link to="/pricing" className="nav-link px-2 text-white">Pricing</Link></li>
                            <li><Link to="#" className="nav-link px-2 text-white">About</Link></li> 
                        </ul> */}

                        {/* <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div> */}
                    </div>
                </div>
            </header>

        </div>
    )
}
