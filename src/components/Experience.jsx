import React from 'react';
import '../styles/components/Profile.styl';

const Experience = ({ experience }) => {
  const items = experience || ['Loading Data'];
  return (
    <div className='Experience section2'>
      <h1 className='Experience-title'>Experience</h1>
      <ul className='Experience-item List'>
        {items.map((exp, id) => {
          return (
            <li key={id.toString()} className='Experience-item'>
              <h2 className='Experience-item' key={id.toString()}>{exp.company}</h2>
            </li>
          );
        })}
      </ul>
    </div>
  );

};

export default Experience;
