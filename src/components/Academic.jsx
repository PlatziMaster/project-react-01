import React from 'react';

const Academic = school => (
  <div className='academic'>
    <ul className='academic-title__title-list'>
      <h1 className='academic-title'> Academic </h1>
      <h2 className='academic-titile__h2'>{school.institution}</h2>
      <h4 className='academic-titile__h3'>{school.degree}</h4>
      <h4 className='academic-titile__h3'>{school.description}</h4>
      <h4 className='academic-titile__h3'>{`Start Date: ${school.startDate} End Date: ${school.endDate}`}</h4>
    </ul>
  </div>
);

export default Academic;
