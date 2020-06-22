import React from 'react';
import '../styles/components/AcademicItem.styl';

const AcademicItem = ({
  degree,
  description,
  institution,
  endDate,
  startDate,
}) => (
  <div className="Academic-item">
    <h4>
      {`${degree} at ${institution}`}{' '}
      <span> {`${startDate} - ${endDate}`}</span>{' '}
    </h4>
    <p>{description}</p>
  </div>
);

export default AcademicItem;
