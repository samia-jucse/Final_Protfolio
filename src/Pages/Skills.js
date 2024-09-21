import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../CSS/Skills.css';  // Ensure you have the proper styling

const skillsData = [
  {
    category: 'Languages',
    skills: [
      { name: 'C', badge: 'https://img.shields.io/badge/c-%2300599C.svg?style=flat&logo=c&logoColor=white' },
      { name: 'C++', badge: 'https://img.shields.io/badge/c++-%2300599C.svg?style=flat&logo=c%2B%2B&logoColor=white' },
      { name: 'JavaScript', badge: 'https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E' },
      { name: 'Objective-C', badge: 'https://img.shields.io/badge/OBJECTIVE--C-%233A95E3.svg?style=flat&logo=apple&logoColor=white' },
      { name: 'Python', badge: 'https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', badge: 'https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB' },
      { name: 'Bootstrap', badge: 'https://img.shields.io/badge/bootstrap-%238511FA.svg?style=flat&logo=bootstrap&logoColor=white' },
      { name: 'HTML5', badge: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white' },
      { name: 'CSS3', badge: 'https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Django', badge: 'https://img.shields.io/badge/django-%23092E20.svg?style=flat&logo=django&logoColor=white' },
      { name: 'MySQL', badge: 'https://img.shields.io/badge/mysql-%234479A1.svg?style=flat&logo=mysql&logoColor=white' },
      { name: 'REST API', badge: 'https://img.shields.io/badge/REST%20API-%2300D1C5.svg?style=flat&logo=api&logoColor=white' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Netlify', badge: 'https://img.shields.io/badge/netlify-%23000000.svg?style=flat&logo=netlify&logoColor=#00C7B7' },
      { name: 'Firebase', badge: 'https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase' },
      { name: 'Git', badge: 'https://img.shields.io/badge/git-%23F05033.svg?style=flat&logo=git&logoColor=white' },
      { name: 'Trello', badge: 'https://img.shields.io/badge/Trello-%23026AA7.svg?style=flat&logo=Trello&logoColor=white' },
    ],
  },
];

function Skills() {
  return (
    <section id="skills">
      <h1 className="title-skills">Skills</h1>
      <div className="skills-timeline-container" style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '20px' }}>
        <VerticalTimeline>
          {skillsData.map((category, index) => (
            <VerticalTimelineElement
              key={index}
              date={<span style={{ color: '#FABC3F', fontSize: '1.5rem', fontWeight: 'bold' }}>{category.category}</span>}  // Increased size and bold
              iconStyle={{ background: '#1d1834', color: '#fff' }}
            >
              <div className="skills-badges">
                {category.skills.map((skill, idx) => (
                  <img key={idx} src={skill.badge} alt={skill.name} style={{ margin: '5px' }} />
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Skills;
