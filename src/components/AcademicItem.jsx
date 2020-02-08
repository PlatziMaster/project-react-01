import React from 'react';
import '../styles/components/AcademicItem.styl'

const AcademicItem = (props) => {
  return (
    <div className='Academic-item'>
      <div className='Academic-item-institution'>
        {props.degree}
        {' '}
        -
        {props.institution}
      </div>
      <div className='Academic-item-date'>
        {props.startDate}
        {' '}
        -
        {' '}
        {props.endDate}
      </div>
      <div className='Academic-item-description'>
        {props.description}
      </div>
    </div>
  );
};

export default AcademicItem;
