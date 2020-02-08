import React from 'react';

const Academic = ({institution, description, startDate, endDate}) => {
  return (
    <div>
        <h3 className='Academic-title'> {institution}</h3>
        <p className='Academic-item'>{ description }</p>
        <p className='Academic-item'>{startDate}</p>
        <p className='Academic-item'>{endDate}</p>
    </div>
  );
};

export default Academic;
