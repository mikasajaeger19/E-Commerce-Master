import React from 'react' 
import "./AdminNavbar.css"
import {Link} from 'react-router-dom'

function AdminNavbar() {
    return (
      <nav className="anavbar">
        <h3 className="anav--cname">
          <Link to="/home">SwiftCart</Link>
        </h3>
        <h3 className="anav--admin">
          <Link to="/addproducts">Add product</Link>
        </h3>
        <h3 className="anav--home">
          <Link to="/home">Home</Link>
        </h3>
        <h3 className="anav--account">
          <Link to="/account">Account</Link>
        </h3>
      </nav>
    );
  }

export default AdminNavbar