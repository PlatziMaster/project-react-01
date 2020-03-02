import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ info }) => {
  const experience = info || Array(3).fill(1);;
  return (
    <div className='Experience-container'>
      <h1 className='Experience-title'>
        Experiencia
      </h1>
      <div className='Experience-item-container'>
        {experience.map((item, index) => {
          const i = index + 1;
          return (
            <div className='Experience-item' key={i}>
              <h2>{item.company}</h2>
              <h4>{item.jobTitle}</h4>
              <p>{`${item.startDate} - ${item.endDate}`}</p>
              <p>{item.jobDescription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
