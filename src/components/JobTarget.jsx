import React from 'react';
import '../styles/components/JobTarget.styl';

const JobTarget = ({ company, endDate, jobDescription, jobTitle, startDate }) => {
  return (
    <div className='JobTarget'>
      <h2>{company}</h2>
      <h3>{jobTitle}</h3>
      <p>{jobDescription}</p>
      <div className='flexBetween'>
        <p>
          <p className='date'>End date</p>
          {endDate}
        </p>
        <p>
          <p className='date'>start date</p>
          {startDate}
        </p>

      </div>
    </div>
  );
};

export default JobTarget;

