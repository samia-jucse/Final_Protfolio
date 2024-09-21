import React, { useState } from 'react';
import NavBar from './Pages/NavBar';
import Profile from './Pages/Profile';
import Skills from './Pages/Skills';
import Achievement from './Pages/Achievement'
import Experience from './Pages/Experience'; // Example section component
import Education from './Pages/Education'; // Example section component
import Projects from './Pages/Projects'; // Example section component
import './CSS/style.css'; // Adjust path if necessary

function App() {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div>
      <NavBar setActiveSection={setActiveSection} activeSection={activeSection} />
      <div>
        <div className={`section ${activeSection === 'profile' ? 'show' : ''}`}>
          {activeSection === 'profile' && <Profile />}
        </div>
        <div className={`section ${activeSection === 'skills' ? 'show' : ''}`}>
          {activeSection === 'skills' && <Skills />}
        </div>
        <div className={`section ${activeSection === 'experience' ? 'show' : ''}`}>
          {activeSection === 'experience' && <Experience />}
        </div>
        <div className={`section ${activeSection === 'education' ? 'show' : ''}`}>
          {activeSection === 'education' && <Education />}
        </div>
        <div className={`section ${activeSection === 'projects' ? 'show' : ''}`}>
          {activeSection === 'projects' && <Projects />}
        </div>
      
        <div className={`section ${activeSection === 'achievementst' ? 'show' : ''}`}>
          {activeSection === 'achievements' && <Achievement />}
        </div>
      </div>
    </div>
  );
}

export default App;
