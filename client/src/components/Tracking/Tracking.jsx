import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tracking = () => {
  const navigate = useNavigate();

  const handlePatientStatusClick = () => {
    navigate('/patient_form');
  };

  return (
    <div className='tracking'>
      <h1>Patient Tracking</h1>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={handlePatientStatusClick}>
              Patient Status
            </a>
          </li>
          <li>
            <a href="/booking">Booking</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Tracking;
