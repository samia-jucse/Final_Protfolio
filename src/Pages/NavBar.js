import React from 'react';
import '../CSS/style.css';
import '../CSS/Navbar.css';





function NavBar({ setActiveSection, activeSection }) {
  const handleNavClick = (section) => {
    setActiveSection(section);
    // Update the browser's URL to reflect the current section without reloading
    window.history.pushState({}, '', `#${section}`);
  };

  return (
    <nav id="desktop-nav">
      <div>
        <ul className="nav-links">
          <li>
            <button
              onClick={() => handleNavClick('profile')}
              className={activeSection === 'profile' ? 'active' : ''}
            >
              Profile
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('skills')}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('experience')}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('education')}
              className={activeSection === 'education' ? 'active' : ''}
            >
              Education
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('achievements')}
              className={activeSection === 'achievements' ? 'active' : ''}
            >
              Achievements
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
