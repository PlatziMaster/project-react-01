import React from 'react';
import '../styles/components/ExperienceItem.styl';

const ExperienceItem = (props) => {
  return (
    <div className='Experience-item'>
      <div className='Experience-item-company'>
        {props.jobTitle}
        {' '}
        -
        {props.company}
      </div>
      <div className='Experience-item-date'>
        {props.startDate}
        {' '}
        -
        {' '}
        {props.endDate}
      </div>
      <div className='Experience-item-job-description'>
        {props.jobDescription}
      </div>
    </div>
  );
};

export default ExperienceItem;
