import React from 'react';
import '../styles/components/Experience.styl';
import ExperienceItem from './ExperienceItem';

const Experience = ({ experiences }) => {
  const experienceArray = experiences || Array(3).fill(1);
  return (
    <div className='Experience section'>
      <h2 className='Experience-title'>Experience</h2>
      <div>
        <ul className='Experience-grid'>
          {experienceArray.map((item, index) => {
            return (
              <ExperienceItem
                key={index}
                className='Experience-item'
                company={item.company}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.jobDescription}
                title={item.jobTitle}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
