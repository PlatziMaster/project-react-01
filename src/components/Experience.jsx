import React from 'react';

const Experience = ({ experience }) => {
  const experienceTitle = experience || Array(1).fill(1);
  const experienceArray = experience || Array(3).fill(1);
  return (
    <>
      {experienceTitle.map(item => (
        <h1 className='mb-3 Experience-title'>{item.category}</h1>
      ))}
      {experienceArray.map(item => (
        <>
          <h3 className='mb-3 Experience-item mt-5 mb-5'>
            {item.company}
          </h3>
          <div className='row'>
            <div className='col-md-6 col-sm-12 Experience-item text-center'>
              <h5>{item.endDate}</h5>
              <h5>{item.startDate}</h5>
            </div>
            <div className='col-md-6 col-sm-12 Experience-item'>
              <h5>{item.jobTitle}</h5>
              <h5>{item.jobDescription}</h5>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Experience;
