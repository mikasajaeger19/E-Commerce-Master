import React from 'react' 
import "./Navbar.css"
import {Link} from 'react-router-dom'

function Navbar() {
    return (
      <nav className="navbar">
        <h3 className="nav--cname">
          <Link to="/home">SwiftCart</Link>
        </h3>
        <h3 className="nav--home">
          <Link to="/home">Home</Link>
        </h3>
        <h3 className="nav--cart">
          <Link to="/cart">Cart</Link>
        </h3>
        <h3 className="nav--account">
          <Link to="/account">Account</Link>
        </h3>
      </nav>
    );
  }

export default Navbar