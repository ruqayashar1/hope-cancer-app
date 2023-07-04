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
    // Reset the form values to original state
    setName('John Doe');
    setUserID('12345');
    setHistory(
      'Previous Visits:\n1. Jan 2023 - Checkup\n2. Mar 2023 - Treatment'
    );
    setSelectedDoctor('');
    setConditionSeverity(5);
    setSelectedCancer('');
  };

  const handleMakeAppointment = () => {
    const newAppointment = {
      cancerType: selectedCancer,
      doctor: selectedDoctor,
      conditionSeverity,
    };
    setAppointment(newAppointment);
  };

  const handleEditAppointment = () => {
    setIsEditingAppointment(true);
  };

  const handleSaveAppointment = () => {
    setIsEditingAppointment(false);
  };

  const handleDeleteAppointment = () => {
    setAppointment(null);
  };

  return (
    <div className="container">
      <div className="user-profile">
        <div
          className={`image ${photo ? 'has-photo' : ''}`}
          style={{
            backgroundImage: `url(${photo})`,
            backgroundSize: 'cover',
          }}
        >
          {!photo && <span className="placeholder">Add profile photo</span>}
          {photo && (
            <button className="delete-photo" onClick={handleDeletePhoto}>
              Delete Photo
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
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <button type="submit" className="btn btn-update">
              Save Profile
            </button>
            <button
              type="button"
              className="btn btn-cancel"
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            className="btn btn-edit"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
        )}
      </form>

      <div className="appointment-section">
        <h3>Make an Appointment</h3>
        <div className="form-group">
          <label htmlFor="cancer">Cancer Type:</label>
          <select
            id="cancer"
            value={selectedCancer}
            onChange={(e) => setSelectedCancer(e.target.value)}
          >
            <option value="">Select Cancer Type</option>
            <option value="Breast Cancer">Breast Cancer</option>
            <option value="Lung Cancer">Lung Cancer</option>
            <option value="Prostate Cancer">Prostate Cancer</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="doctor">Doctor:</label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {selectedCancer === 'Breast Cancer' && (
              <>
                <option value="Dr. Smith">Dr. Smith</option>
                <option value="Dr. Johnson">Dr. Johnson</option>
              </>
            )}
            {selectedCancer === 'Lung Cancer' && (
              <>
                <option value="Dr. Williams">Dr. Williams</option>
                <option value="Dr. Davis">Dr. Davis</option>
              </>
            )}
            {selectedCancer === 'Prostate Cancer' && (
              <>
                <option value="Dr. Anderson">Dr. Anderson</option>
                <option value="Dr. Brown">Dr. Brown</option>
              </>
            )}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="condition-severity">Condition Severity:</label>
          <select
            id="condition-severity"
            value={conditionSeverity}
            onChange={(e) => setConditionSeverity(Number(e.target.value))}
          >
            <option value="0">0 - Worst</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10 - Healthiest</option>
          </select>
        </div>

        <button
          className="btn btn-make-appointment"
          onClick={handleMakeAppointment}
        >
          Make Appointment
        </button>

        {appointment && (
          <div className="appointment-details">
            <h3>Appointment Details</h3>
            <div>
              <strong>Cancer Type:</strong> {appointment.cancerType}
            </div>
            <div>
              <strong>Doctor:</strong> {appointment.doctor}
            </div>
            <div>
              <strong>Condition Severity:</strong> {appointment.conditionSeverity}
            </div>
            {!isEditingAppointment ? (
              <div>
                <button className="btn btn-edit" onClick={handleEditAppointment}>
                  Edit Appointment
                </button>
                <button className="btn btn-delete" onClick={handleDeleteAppointment}>
                  Delete Appointment
                </button>
              </div>
            ) : (
              <div>
                <button className="btn btn-save" onClick={handleSaveAppointment}>
                  Save Appointment
                </button>
                <button className="btn btn-cancel" onClick={() => setIsEditingAppointment(false)}>
                  Cancel
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
