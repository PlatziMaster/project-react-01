import React from 'react';
import '../styles/components/Experience.css';

const Experience = (props) => {
  const experience = Object.values(props);
  return (
    <div className='Experience'>
      <h2 className='Experience-title'>Experience</h2>
      {experience.map((item, key) => (
        <div className='Experience-item' key={key}>
          <h3>
            {item.jobTitle}
            {item.startDate}
            -
            {item.endDate}
          </h3>
          <h4>{item.company}</h4>
          <p>{item.jobDescription}</p>
        </div>

      ))}
    </div>
  );
};

export default Experience;
