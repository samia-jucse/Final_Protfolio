import React from 'react';
import '../CSS/Project.css';
import Pro1 from '../assets/project1.png';
import Pro2 from '../assets/project2.png'; // Import your second project image

function Projects() {
  return (
    <div id="projects">
      <h1 className="title-project">Projects</h1>
      <div className='project_container'>
        {/* Project 1 */}
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
                <button>CSS</button>
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

      {/* Project 2 */}
      <div className='project_container'>
        <div className="project-img">
          <img src={Pro2} alt="Project 2" />
        </div>
        <div className="project-description">
          <h1>Diet and Nutrition </h1>
          <p>This app allows users to search for and save their favorite recipes from various cuisines.</p>
          <div className="btn-container">
            <div className='tools-container'>
              <ul className='tools'>
                <button>React</button>
                <button>CSS</button>
                <button>Axios</button>
              </ul>
            </div>
            <div className='link-button'>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://github.com/samia-jucse/Diet-and-Nutrition-Application.git'}
              >
                Github
              </button>
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => window.location.href = 'https://diet-and-nutrition-application-2iif.vercel.app/'}
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
