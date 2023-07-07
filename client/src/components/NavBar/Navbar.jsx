
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({isLoggedin, setLoggedin}) => {
  const redirect = isLoggedin ? '/user_profile' : '/login';
  const login = isLoggedin ? 'Logout' : 'Login';

  return (
    <nav >
        
        <ul className="navbar-list py-4">
        <li className={"navbar-item" }>
          <Link to="/homepage" className="navbar-link">Home</Link>
        </li>
        <li className={"navbar-item" }>
          <Link to="/signup" className="navbar-link">Sign up</Link>
        </li>
        
        <li className={"navbar-item" }>
          <Link to="/login" className="navbar-link">{login}</Link>
        </li>
        <li className={"navbar-item" }>
          <Link to={redirect} className="navbar-link">User Profile</Link>
        </li>
        <li className={"navbar-item" }>
          <Link to="/research" className="navbar-link">Educational Research</Link>
        </li>
        <li className={"navbar-item" }>
          <Link to="/admin" className="navbar-link">Admin Login</Link>
        </li>
        {/* <li className="navbar-item">
          <Link to="/signin" className="navbar-link">Sign In</Link>
        </li>
        <li className="navbar-item">
          <Link to="/wellbeing" className="navbar-link">Wellbeing</Link>
        </li>
        <li className="navbar-item">
          <Link to="/reviews" className="navbar-link">Reviews</Link>
        </li> */}
      </ul> 
    </nav>
  );
};

export default Navbar;