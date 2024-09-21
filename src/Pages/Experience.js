import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../CSS/Experience.css';

const experienceData = [
  {
    date: "2024",
    title: "I collaborated with a team on the NCPC (National Collegiate Programming Contest) website, where I worked as a frontend designer.",
  },
  {
    date: "2024",
    title: "Develop a solo project named Plant Shop Management System",
  },
  {
    date: "2023",
    title: "Work in a team for developing Exam Bill Management System Which is our Academic Project.Here used React,css,bootstrap and django",
  },

  {
    date: "2023",
    title: "Hired for internship at Tare Zameen Foundation as a Founder",
  },
];

function Experience() {
  return (
    <section id="experience">
      <h1 className="title-experience">Experience</h1>
      <div className="experience-category-box">
        <VerticalTimeline>
          {experienceData.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={<span style={{ color: '#FABC3F' }}>{exp.date}</span>}
              iconStyle={{ background: '#1d1834', color: '#ffe' }}
            >
              <h3 className='text-white text-[24px] font-bold'>{exp.title}</h3>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
