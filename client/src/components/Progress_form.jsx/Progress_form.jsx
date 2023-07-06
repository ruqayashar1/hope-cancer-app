import React, { useState } from 'react';
import './Progress.css'; 

const PatientForm = () => {
  const [patientId, setPatientId] = useState('');
  const [patientName, setPatientName] = useState('');
  const [progress, setProgress] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('clicked!')
    fetch("/progress_form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patient_id: patientId,
        name: patientName,
        progress: progress
      }),
    }).then((r) => {
      console.log(r);
      if (r.ok) {
        console.log("submitted")
        //r.json().then((user) => setUser(user));
        // navigate('/login')
      }
    });
    setPatientId('');
    setPatientName('');
    setProgress('');
  }
  
  

  return (
    <div className='patient_form'>
      <h2>Enter Patient Information</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="patientId">Patient ID:</label>
          <input
            type="number"
            id="patientId"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="progress">Progress:</label>
          <textarea
            id="progress"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;
