import React from 'react'
import './Projects.css';
import { PROJECTS } from '../data/content';





const Projects = () => {
  return (
    <div className="container-projects">
        <h2>Projects</h2>
        <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>

            <div className="project-images">
              {project.images && project.images.length > 0 &&
                 project.images.map((image, imgIndex) => (
                 <img key={imgIndex} src={image} alt={`${project.title} Screenshot ${imgIndex + 1}`} className="project-image" />
                     ))
                    }
               </div>

            <p>{project.description}</p>
            <p><strong>Tecnologie:</strong> {project.technologies}</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Projects;