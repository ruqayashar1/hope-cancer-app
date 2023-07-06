import React, { useState } from 'react';

const PatientForm = () => {
  const [patientId, setPatientId] = useState('');
  const [patientName, setPatientName] = useState('');
  const [progress, setProgress] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the form data, such as saving to a database

    // Clear the form fields
    setPatientId('');
    setPatientName('');
    setProgress('');
  };

  return (
    <div>
      <h2>Enter Patient Information</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="patientId">Patient ID:</label>
          <input
            type="text"
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
