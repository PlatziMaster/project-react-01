import React from 'react';

const Experience = ({ experience }) => {

  return (
    <div className='Experience'>
      <div className='Experience-title'>
        <h2>Experience</h2>
      </div>
      <div className='Experience-container'>
        {experience !== undefined ?
          experience.map((exp) => {
            return (
              <ExperienceItem
                key={exp.company}
                {...exp}
              />
            );
          }) : (
            (
              <>
                <div className='Experience-item' />
                <div className='Experience-item' />
                <div className='Experience-item' />
              </>
            )
          )}
      </div>
    </div>
  );
};

const ExperienceItem = ({ company, jobTitle, jobDescription, startDate, endDate }) => {
  return (
    <>
      <div className='Experience-item'>
        {company}
        -
        {jobTitle}
      </div>
      <div className='Experience-item'>
        {jobDescription}
      </div>
      <div className='Experience-item'>
        {startDate}
        -
        {endDate}
      </div>
      <br />
    </>
  );
};

export default Experience;
