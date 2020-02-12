import React from 'react';

const Experience = job => (
  <div className='experience'>
    <ul className='experience-list'>
      <h1 className='experience-title'> Experience </h1>
      <h2 className='experience-titile__h2'>{job.company}</h2>
      <h4 className='experience-titile__h3'>{job.jobTitle}</h4>
      <h4 className='experience-titile__h3'>{job.jobDescription}</h4>
      <h4 className='experience-titile__h3'>{`Start Date: ${job.startDate} End Date: ${job.endDate}`}</h4>
    </ul>
  </div>
);

export default Experience;
