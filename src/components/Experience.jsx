import React from 'react';
import Item from './Item';
import '../styles/components/Experience.styl';

const Experience = ({ experience }) => {
  return (
    <div className='Experience'>
      <h3 className='Experience-title'>Experience</h3>
      <div className='Experience__container'>
        {
          (experience) ?
            (experience.map(item => (
              <Item
                key={item.company}
                company={item.company}
                endDate={item.endDate}
                jobDescription={item.jobDescription}
                jobTitle={item.jobTitle}
                startDate={item.startDate}
              />
            ))) : null
        }
      </div>
    </div>
  );
};

export default Experience;
