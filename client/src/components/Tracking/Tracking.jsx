import React from 'react';

const Tracking = () => {
  return (
    <div className='tracking'>
      <h1>Patient Tracking</h1>
      <nav>
        <ul>
          <li>
            <a href="/patient-status">Patient Status</a>
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

