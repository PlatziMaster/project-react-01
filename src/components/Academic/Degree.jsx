import React from 'react';

import './index.styl';

const Degree = ({ degree, description, startDate, endDate, institution }) => (
  <div className='Degree'>
    <div className='Degree-title '>{degree}</div>
    <div className='date'>{`${startDate} - ${endDate}`}</div>
    <div className='institution'>{institution}</div>
    <div className='description'>{description}</div>
  </div>
);

export default Degree;
