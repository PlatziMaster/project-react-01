import React from 'react';
import '../styles/components/Profile.styl';

const Experience = ({ experience }) => {
  const items = experience || Array(0).fill('Loading Data');
  return (
    <div className='Experience section2'>
      <h1>Experience</h1>
      {items.map((exp) => {
        return (
          <h2 key={exp.endDate}>{exp.company}</h2>
        );
      })}
    </div>
  );

};

export default Experience;
