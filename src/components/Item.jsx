import React from 'react';
import '../styles/components/Item.styl';

const Item = (props) => {
  const {
    company,
    endDate,
    jobDescription,
    jobTitle,
    startDate,
  } = props;

  return (
    <div className='Item'>
      <p className='.Experience-item'>{company}</p>
      <p className='.Experience-item'>{jobTitle}</p>
      <p className='.Experience-item'>{`${startDate} / ${endDate}` }</p>
      <p className='.Experience-item'>Tasks</p>
      <div className='Item__tasks'>{jobDescription}</div>
    </div>
  );
};

export default Item;
