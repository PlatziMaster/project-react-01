import React from 'react';

import '../styles/components/Experience.styl';

const Experience = ({ experience = [] }) => {
  return (
    <section className="Experience">
      <h2 className="Experience-title">Experience</h2>
      {experience.map(exp => (
        <div key={exp.company} className="Experience-item">
          <h3>{exp.company}</h3>
          <p>{exp.jobTitle}</p>
          <p>{exp.jobDescription}</p>
          <span>
            {exp.startDate} to {exp.endDate}
          </span>
        </div>
      ))}
    </section>
  );
};

export default Experience;
