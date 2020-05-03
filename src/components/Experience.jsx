import React from 'react';
import '../styles/components/Profile.styl';

const Experience = ({ experience }) => {
  const items = experience || Array(0).fill('Loading Data');
  return (
    <div className='Experience section2'>
      <h1 className='Experience title'>Experience</h1>
      <div className="flexbox">
        {items.map((exp) => {
          return (
            <h2 key={exp.endDate}>{exp.company}</h2>
          );
        })}
      </div>
    </div>
  );

};

export default Experience;
