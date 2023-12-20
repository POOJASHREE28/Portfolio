import React from 'react';
import './qualification.css'; 

const Qualification = () => {
  return (
    <div className="qualification-container">
      <h1>Qualifications</h1>
      <div className="qualification-box">
        <h2>1st-7th</h2>
        <p>Sandeepani Rural Education Institution, Puttur</p>
      </div>
      <div className="qualification-box">
        <h2>8th-10th</h2>
        <p>Sri Ramakrishna High School, Puttur</p>
      </div>
      <div className="qualification-box">
        <h2>Pre-University</h2>
        <p>Vivekananda PU College, Puttur</p>
      </div>
      <div className="qualification-box">
        <h2>Bachelor of Engineering</h2>
        <p>Currently persuing in Sahyadri college Engineering and Management, Mangalore</p>
      </div>
    </div>
  );
};

export default Qualification;
