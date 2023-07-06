import React, { useEffect, useState } from 'react';
import './Tracking.css';

const Tracking = ({doctor}) => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() =>{
    fetch("/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ doctor }),
    }).then(response => response.json())
      .then(data => {
      console.log(data);
      setAppointments(data);
    })
  },[]);

  console.log(appointments);

  function handleSubmit(e) {
    e.preventDefault();
   // console.log({email, password})
    // fetch("/patients", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ doctor }),
    // }).then((r) => 
    // {
    //   //console.log(r)
    //   if (r.ok) {
        
    //   }
    // });

  }
  
  return (
    <div className='tracking'>

      
      <h1>Welcome Back, Dr. {doctor}</h1>
      <h3>You have {appointments.length} upcoming appointments:</h3>
      <nav>
        <ul>
          <li>
            <a href="/patient-status">Patient Status</a>
          </li>
          <li>
            <a href="/booking">Bookings</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
       <div className="appointment-list">
          {appointments.map(appointment => (
          <div key={appointment.id} className="appointment-card">
            <h2>{appointment.patient}</h2>
            <p>Cancer: {appointment.cancer}</p>
            <p>Severity: {appointment.severity}</p>
            <p>Date: {appointment.appointment_date}</p>
            <p>Time: {appointment.appointment_time}</p>
            <p>Hospital: {appointment.hospital}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracking;

