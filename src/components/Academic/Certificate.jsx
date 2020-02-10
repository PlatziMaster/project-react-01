import React from 'react';

import './index.styl';

const Certificate = ({ name, date, institution, description }) => (
  <div className='Certificate'>
    <div className='Certificate-title '>{name}</div>
    <div className='date'>{date}</div>
    <div className='institution'>{institution}</div>
    <div className='description'>{description}</div>
  </div>
);

export default Certificate;
