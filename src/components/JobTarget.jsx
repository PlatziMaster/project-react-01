import React from 'react';

const JobTarget = ({ company, endDate, jobDescription, jobTitle, startDate }) => {
  return (
    <div>
      <h2>{company}</h2>
      <h3>{jobTitle}</h3>
      <p>{jobDescription}</p>
      <div>
        <p>{startDate}</p>
        <p>{endDate}</p>

      </div>
    </div>
  );
};

export default JobTarget;

