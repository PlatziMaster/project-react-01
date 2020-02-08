import React from 'react';

const Experience = ({company, jobTitle, jobDescription, startDate, endDate}) => {
  return (
    <>
      <h2 className='Experience-title'> {jobTitle}</h2>
      <div className='Experience-detail'>
        <div className='Experience-content'>
            <div className='Experience-item'>{company} - {jobTitle}</div>
            <div className='Experience-item'>{jobDescription}</div>
            <div className='Experience-item'>{startDate} - {endDate}</div>
          </div>
      </div>
    </>
  );
};

export default Experience;
