import React from 'react';
import './about.css';
import Profile from '../../assets/profile.jpeg';

const About = () => {
 return (
   <section id="about">
     <div className="header">Who Am I?</div>
     <div className="columns">
        <div className="left-column">
         <h2>About Me</h2>
         <div className="profile-image">
           <img src={Profile} alt="Profile Image" />
         </div>
         <div className="about-text">
           Hi, I am Poojashree. I am a hard-working engineering graduate specialized in Information Science & Engineering with overall CGPA of 9.35.
           My greatest strength lies in my ability to transform challenges into opportunities. I see problems not as roadblocks, but as a chance to innovate and learn, 
           leveraging my creativity and adaptability to navigate uncharted territories with a positive mindset.
         </div>
         <button className="resume-button">View Resume</button>
        </div>
        <div className="right-column">
          <h2>My Skills</h2>
          <div className="skill-box">
            <span className="title">HTML CSS JS</span>
            <div className="skill-bar">
             <span className="skill-per hcj">
              <span className="tooltip">80%</span>
             </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">ReactJs</span>
            <div className="skill-bar">
             <span className="skill-per rj">
              <span className="tooltip">50%</span>
             </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Communication</span>
            <div className="skill-bar">
              <span className="skill-per com">
                <span className="tooltip">70%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Problem Solving</span>
            <div className="skill-bar">
              <span className="skill-per ps">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>
          <div className="skill-box">
            <span className="title">Decision making</span>
            <div className="skill-bar">
              <span className="skill-per dm">
                <span className="tooltip">55%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
