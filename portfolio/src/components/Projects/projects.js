import React from 'react';
import './projects.css'; 
import fleet from '../../assets/fleet.png';
import diary from '../../assets/diary.png';
import profile from '../../assets/profile.png';
const Projects = () => {
  return (
    <div className="project-container">
      <h1 className="project-title">Projects</h1>
      <div className="projects">
        <div className="project">
          <div className="project-image">
            <img src={fleet} alt="Project 1" className="project-image-inner" />
          </div>
          <div className="project-content">
          <h2 className="project-title1">Fleet Management</h2>
            Fleet management streamlines vehicle operations, improving efficiency and cost-effectiveness through real-time tracking, maintenance scheduling, and performance analytics.
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img src={diary} alt="Project 2" className="project-image-inner" />
          </div>
          <div className="project-content">
          <h2 className="project-title1">Dairy Farm shop management system</h2>
          A comprehensive system for managing operations and transactions within a dairy farm shop, including inventory, sales, customer relations, and financial tracking
          </div>
        </div>
        <div className="project">
          <div className="project-image">
            <img src={profile} alt="Project 3" className="project-image-inner" />
          </div>
          <div className="project-content">
            <h2 className="project-title1">Portfolio</h2>
            A comprehensive portfolio showcasing my profile, projects, skills, qualifications, and contact details.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;