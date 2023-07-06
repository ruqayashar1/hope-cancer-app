import React from "react";
import './Body.css';
function Body() {
  return (
    <>
      <div className="homepage">
        <img src="pix.jpg" alt="" />
        <div className="text-overlay">
            <h2>
              HOPE CANCER MANAGEMENT
            </h2>
        </div>
      </div>
      <h2>We are always fully focused on helping you through your cancer
              journey</h2>
              <div className="image-gallery">
     
      <div className="imageContainer">
        <img src="patient.jpeg" alt="" className="gallery-image" />
        <img src="kids.jpg" alt="" className="gallery-image" />
        <img src="pat.png" alt="" className="gallery-image" />
      </div>
    </div>
    </>
  );
}
export default Body;
