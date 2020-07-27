import React from 'react';
import '../styles/components/Experience.styl';
const Experience = ({ Experience = [] }) => (
  <div className="Experience">
    <h2 className="Experience-title">Experience</h2>
    {Experience.map(item => (
      <div className="Experience-item">
        <span>
          {item.startDate} / {item.endDate}
        </span>
        <div className="Experience-item_place">
          <h3>{item.company}</h3>
          <p>{item.jobTitle}</p>
          <p>{item.jobDescription}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Experience;
