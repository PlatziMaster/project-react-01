import React from 'react';
import '../styles/components/Experience.styl';
const Experience = ({experience}) => {
  return (
    <div className="Experience">
      <div className="container card shadow">
        <h1 className="Experience-title">Experience</h1>
        <ul>
          {experience &&
            experience.length > 0 &&
            experience.map((experience, idx) => (
              <li className="Experience-item" key={`experience-item-${idx}`}>
                <h3>{experience.jobTitle} | {experience.company}</h3>
                <small>{experience.startDate} - {experience.endDate}</small>
                <div className="Experience-job-desc">
                  {experience.jobDescription}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
