import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('John Doe');
  const [userID, setUserID] = useState('12345');
  const [history, setHistory] = useState(
    'Previous Visits:\n1. Jan 2023 - Checkup\n2. Mar 2023 - Treatment'
  );
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [conditionSeverity, setConditionSeverity] = useState(5);
  const [selectedCancer, setSelectedCancer] = useState('');
  const [appointment, setAppointment] = useState(null);
  const [isEditingAppointment, setIsEditingAppointment] = useState(false);
  const [isAppointmentFormVisible, setIsAppointmentFormVisible] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [hospitalBranch, setHospitalBranch] = useState('');

  const handlePhotoChange = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const handleDeletePhoto = () => {
    setPhoto('');
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    // Perform the update profile logic here
    setIsEditing(false);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset the form values to the original state
    setName('John Doe');
    setUserID('12345');
    setHistory('Previous Visits:\n1. Jan 2023 - Checkup\n2. Mar 2023 - Treatment');
    setSelectedDoctor('');
    setConditionSeverity(5);
    setSelectedCancer('');
  };

  const handleMakeAppointment = () => {
    setIsAppointmentFormVisible(true);
  };

  const handleEditAppointment = () => {
    setIsEditingAppointment(true);
  };

  const handleSaveAppointment = () => {
    const newAppointment = {
      cancerType: selectedCancer,
      doctor: selectedDoctor,
      conditionSeverity,
      date: appointmentDate,
      time: appointmentTime,
      branch: hospitalBranch,
    };
    setAppointment(newAppointment);
    setIsEditingAppointment(false);
    setIsAppointmentFormVisible(false);
  };

  const handleDeleteAppointment = () => {
    setAppointment(null);
  };

  return (
    <div className="container my-3">
      <div className="user-profile">
        <div
          className={`image1 ${photo ? 'has-photo' : ''}`}
          style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover',
            borderRadius: '50%',
          }}
        >
          {!photo && <span className="placeholder">Add profile photo</span>}
          {photo && (
            <button className="delete-photo-btn" onClick={handleDeletePhoto}>
              <i className="fas fa-trash"></i>
            </button>
          )}
        </div>
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="photo-input"
          />
        )}
      </div>
      <form className="edit-form" onSubmit={handleUpdateProfile}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          {isEditing ? (
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          ) : (
            <div className="display-value">{name}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="user-id">User ID:</label>
          {isEditing ? (
            <input
              type="text"
              id="user-id"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          ) : (
            <div className="display-value">{userID}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="history">History:</label>
          {isEditing ? (
            <textarea
              id="history"
              value={history}
              onChange={(e) => setHistory(e.target.value)}
            ></textarea>
          ) : (
            <div className="display-value">{history}</div>
          )}
        </div>

        {isEditing ? (
          <>
            <button type="submit" style={{ width: 'fit-content' }} className="btn btn-primary">
              Save Profile
            </button>
            <button type="button" style={{ width: 'fit-content' }} className="btn btn-danger" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <button type="button" style={{ width: 'fit-content' }} className="btn btn-secondary" onClick={handleEditProfile}>
            Edit Profile
          </button>
        )}
      </form>

      <div className="appointment-section">
        <div className="appointment-buttons">
          <button className="btn btn-primary" onClick={handleMakeAppointment}>
            Make Appointment
          </button>
          {appointment && !isEditingAppointment && (
            <div>
              <button className="btn btn-primary" onClick={handleEditAppointment}>
                Edit Appointment
              </button>
              <button className="btn btn-delete" onClick={handleDeleteAppointment}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          )}
        </div>

        {isAppointmentFormVisible && (
          <div className="make-appointment-form">
            <div className="form-group">
              <label htmlFor="cancer">Cancer Type:</label>
              <select id="cancer" value={selectedCancer} onChange={(e) => setSelectedCancer(e.target.value)} required>
                <option value="">Select Cancer Type</option>
                <option value="Breast Cancer">Breast Cancer</option>
                <option value="Lung Cancer">Lung Cancer</option>
                <option value="Prostate Cancer">Prostate Cancer</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="doctor">Doctor:</label>
              <select id="doctor" value={selectedDoctor} onChange={(e) => setSelectedDoctor(e.target.value)} required>
                <option value="">Select Doctor</option>
                {selectedCancer === 'Breast Cancer' && (
                  <>
                    <option value="Dr. Rukia">Dr. Rukia</option>
                    <option value="Dr. Japheth">Dr. Japheth</option>
                  </>
                )}
                {selectedCancer === 'Lung Cancer' && (
                  <>
                     <option value="Dr. Mercy">Dr. Mercy</option>
                    <option value="Dr. Nyakundi">Dr. Nyakundi</option>
                  </>
                )}
                {selectedCancer === 'Prostate Cancer' && (
                  <>
                    <option value="Dr. Charles">Dr. Charles</option>
                  </>
                )}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="condition-severity">Condition Severity:</label>
              <select
                id="condition-severity"
                value={conditionSeverity}
                onChange={(e) => setConditionSeverity(parseInt(e.target.value))}
                required
              >
                <option value="1">1 (Mild)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Severe)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="appointment-date">Date:</label>
              <input
                type="date"
                id="appointment-date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="appointment-time">Time:</label>
              <input
                type="time"
                id="appointment-time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="hospital-branch">Hospital Branch:</label>
              <input
                type="text"
                id="hospital-branch"
                value={hospitalBranch}
                onChange={(e) => setHospitalBranch(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-primary" onClick={handleSaveAppointment}>
              Save Appointment
            </button>
          </div>
        )}

        {appointment && !isEditingAppointment && (
          <div className="appointment-details">
            <h3>Appointment Details:</h3>
            <p>Cancer Type: {appointment.cancerType}</p>
            <p>Doctor: {appointment.doctor}</p>
            <p>Condition Severity: {appointment.conditionSeverity}</p>
            <p>Date: {appointment.date}</p>
            <p>Time: {appointment.time}</p>
            <p>Hospital Branch: {appointment.branch}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;