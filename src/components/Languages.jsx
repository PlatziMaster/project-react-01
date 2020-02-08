import React from 'react';

const Languages = ({ name, percentage, experience }) => {
  return (
    <>
      <h1 className='Languages-title'> {experience}</h1>
      <ul className ='Languages-detail'>
        <li className='Languages-item'>{name}</li>
        <li className='Languages-item'>{percentage}</li>
        <li className='Languages-item'>{experience}</li>
      </ul>
    </>
  );
};

export default Languages;
