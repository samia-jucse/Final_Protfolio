import React from 'react';

function NavBar({ setActiveSection, activeSection }) {
  const handleNavClick = (section) => {
    setActiveSection(section);
    // Prevent default anchor behavior
    window.history.pushState({}, '', `#${section}`);
  };

  return (
    <nav id="desktop-nav">
      <div>
        <ul className="nav-links">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('profile');
              }}
              className={activeSection === 'profile' ? 'active' : ''}
            >
              Profile
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('skills');
              }}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('experience');
              }}
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('education');
              }}
              className={activeSection === 'education' ? 'active' : ''}
            >
              Education
            </a>
          </li>

        
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('achievements');
              }}
              className={activeSection === 'achievements' ? 'active' : ''}
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('projects');
              }}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;  