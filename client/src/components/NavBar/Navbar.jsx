// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();

//   return (
//     <nav>
//       <ul className="navbar-list">
//         <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
//           <Link to="/" className="navbar-link">Sign Up</Link>
//         </li>
//         <li className={`navbar-item ${location.pathname === '/login' ? 'active' : ''}`}>
//           <Link to="/Login" className="navbar-link">Sign In</Link>
//         </li>
//         <li className={`navbar-item ${location.pathname === '/PatientReviews' ? 'active' : ''}`}>
//           <Link to="/PatientReviews" className="navbar-link">Reviews</Link>
//         </li>
//         <li className={`navbar-item ${location.pathname === '/WellBeing' ? 'active' : ''}`}>
//           <Link to="/WellBeing" className="navbar-link">Your WellBeing</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        
        <ul className="navbar-list">
        <li className={"navbar-item" }>
          <Link to="/homepage" className="navbar-link">Home</Link>
        </li>
        <li className={"navbar-item" }>
          <Link to="/signup" className="navbar-link">sign up</Link>
        </li>
        
        <li className={"navbar-item" }>
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
        <li className={"navbar-item" }>
          <Link to="/services" className="navbar-link">Our Services</Link>
        </li>
        <li className={"navbar-item" }>
          <Link to="/research" className="navbar-link">Educational Research</Link>
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