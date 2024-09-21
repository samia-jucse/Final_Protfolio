import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../CSS/Education.css';

const educationData = [
  {
    date: "March 2020 - Present",
    title: (
      <>
        <span style={{ color: '#FFD700' }}>BACHELOR OF SCIENCE (B.SC.)</span><br />
        <span style={{ color: '#F99417' }}>Computer Science and Engineering</span>
      </>
    ),
    institution: (
      <span style={{ color: 'blue' }}>Jahangirnagar University</span>
    ),
    gpa: <span style={{ color: 'black' }}>CGPA: 3.60/4.00</span>,
  },
  {
    date: "2019",
    title: (
      <span style={{ color: '#FFD700' }}>Higher Secondary Certificate (HSC)</span>
    ),
    institution: (
      <span style={{ color: 'blue' }}>Patuakhali Govt Women's College</span>
    ),
    gpa: <span style={{ color: 'black' }}>GPA: 5.00/5.00</span>,
  },
  {
    date: "2017",
    title: (
      <span style={{ color: '#FFD700' }}>Secondary School Certificate (SSC)</span>
    ),
    institution: (
      <span style={{ color: 'blue' }}>Tejgaon Govt. High School</span>
    ),
    gpa: <span style={{ color: 'black' }}>GPA: 5.00/5.00</span>,
  },
];

function Education() {
  return (
    <section id="education">
      <div className="title-container">
        <h1 className="title-education">Education</h1>
      </div>
      <div className="education-category-box">
        <VerticalTimeline>
          {educationData.map((edu, index) => (
            <VerticalTimelineElement
              key={index}
              date={<span style={{ color: '#F5EEE6' }}>{edu.date}</span>}
              iconStyle={{ background: '#1d1834', color: '#ffe' }}
            >
              <div className="education-item">
                <h3 className='text-white text-[24px] font-bold'>{edu.title}</h3>
                <p className='text-secondary text-[16px] font-semibold' style={{ margin: '4px 0 0 0' }}>
                  {edu.institution}
                </p>
                <p style={{ margin: '2px 0 0 0', color: 'black' }}>{edu.gpa}</p>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Education;
