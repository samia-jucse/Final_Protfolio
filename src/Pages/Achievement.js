import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
 import '../CSS/style.css';

const achievementData = [
  {
    date: "2023",  // Corrected year for context
    title: "Secured 10th position in NGPC-2023 among 150+ teams",
  },
  {
    date: "2024",
    title: "Participated in NCPC 2024 contest",
  },
  {
    date: "2022",
    title: "Participated in Ada Lovelace Programming contest 2022",
  },
];

function Achievement() {
  return (
    <section id="achievements">
      <h1 className="title-achievement">Achievements</h1>
      <div className="achievement-category-box">
        <VerticalTimeline>
          {achievementData.map((achievement, index) => (
            <VerticalTimelineElement
              key={index}
              date={<span style={{ color: '#FABC3F' }}>{achievement.date}</span>}
              iconStyle={{ background: '#1d1834', color: '#ffe' }}
            >
              <h3 className='text-white text-[24px] font-bold'>{achievement.title}</h3>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Achievement;
