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
      <p className='Item__paragraph'>{company}</p>
      <p className='Item__paragraph'>{jobTitle}</p>
      <p className='Item__paragraph'>{`${startDate} / ${endDate}` }</p>
      <p className='Item__paragraph'>Tasks</p>
      <div className='Item__tasks'>{jobDescription}</div>
    </div>
  );
};

export default Item;
