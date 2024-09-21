import React from 'react';
import '../CSS/Project.css';
import Pro1 from '../assets/project1.png';

function Projects() {
  return (
    <div id="projects">
  <h1 className="title-project">Projects</h1>
  <div className='project_container'>
    <div className="project-img">
      <img src={Pro1} alt="Project 1" />
    </div>
    <div className="project-description">
      <h1>Plant Shop</h1>
      <p>This is a business website where one can visit, buy, and collect their favorite indoor and outdoor plants.</p>
      <div className="btn-container">
        <div className='tools-container'>
          <ul className='tools'>
            <button>React</button>
            <button>Css</button>
            <button>Material UI</button>
          </ul>
        </div>
        <div className='link-button'>
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => window.location.href = 'https://github.com/jucse-29/Plant-Shop-Management-System'}
          >
            Github
          </button>
          <button
            className="btn btn-color-2 project-btn"
            onClick={() => window.location.href = 'https://github.com/'}
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Projects;
