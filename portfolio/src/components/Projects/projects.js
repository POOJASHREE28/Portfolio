import React from "react";
import './projects.css'

const ProjectCard = ({ image, name, description, sourceCodeLink }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="project-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
          <button className="view-source-btn">Source Code</button>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      image: "https://th.bing.com/th/id/OIP.58j1DsZ8xOLv8GYLH3pwAAHaEN?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Fleet-Management",
      description: "Fleet management streamlines vehicle operations, improving efficiency and cost-effectiveness through real-time tracking, maintenance scheduling, and performance analytics.",
      sourceCodeLink: "https://github.com/your-username/project-1",
    },
    {
      image: "https://th.bing.com/th/id/OIP.380lwQTIrADB3PRu0378kwHaKe?w=208&h=294&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Portfolio",
      description: " A comprehensive portfolio showcasing my profile, projects, skills, qualifications, and contact details.",
      sourceCodeLink: "https://github.com/your-username/project-2",
    },
  ];

  return (
    <section id="projects">
      <h1 className="heading">Projects</h1>
      <div className="projectContent">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
