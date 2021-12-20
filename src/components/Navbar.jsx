import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
      <nav className="nabbar navbar-expand-lg navbar-dark bg-dark py-2">
        <Link to="/" className="navbar-brand ml-5">
            React Redux Contact App AR
        </Link>
      </nav>  
    )
}
export default Navbar
