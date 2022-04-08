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
                    </div>
                </div>
            </header>

        </div>
    )
}
