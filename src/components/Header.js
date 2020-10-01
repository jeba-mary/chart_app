import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1" style={{color: ["rgba(75, 192, 192, 0.6)"]}}>REACT APPLICATION</span>
        <div className="navbar-nav">
          <Link to="/register" class="nav-item nav-link" href="#" style={{color: ["rgba(75, 192, 192, 0.6)"]}}><i className="fa fa-user">Register</i></Link>
        </div>
    </nav>
  )
}


export default Header;