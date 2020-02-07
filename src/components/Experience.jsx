import React from 'react';
import ExperienceItem from './ExperienceItem';
import '../styles/components/Experience.styl';

const Experience = (props) => {
  let i = 1;

  return (
    <div className='Experience'>
      <div className='Experience-title'>
        Experience
      </div>
      <div className='Experience-items'>
        {props[0] ?
          (Object.keys(props).map(item => <ExperienceItem key={i++} {...props[item]} />)) :
          (<div className='Experience-item-company'> Ninguna </div>) }
      </div>
    </div>
  );
};

export default Experience;
