import React from 'react';
import '../styles/components/Experience.styl';
import Jobtarget from './JobTarget';

const Experience = ({ experience }) => {
  return (
    <div className='Experience'>
      <h2 className='titleLabel'>Experience</h2>

      {experience && experience.map((jobInfo) => {
        return (
          <Jobtarget {...jobInfo} />

        );
      })}
    </div>
  );
};

export default Experience;
