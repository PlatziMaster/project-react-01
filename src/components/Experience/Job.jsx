import React from 'react';

import './index.styl';

const Job = ({ company, startDate, endDate, jobDescription, jobTitle }) => (
  <div className='Job'>
    <div className='Job-title '>{jobTitle}</div>
    <div className='date'>{`${startDate} - ${endDate}`}</div>
    <div className='company'>{company}</div>
    <div className='description'>{jobDescription}</div>
  </div>
);

export default Job;
