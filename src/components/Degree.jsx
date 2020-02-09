import React from 'react';
import '../styles/components/Degree.styl';

const Degree = ({ degree, description, endDate, institution, startDate }) => {
  return (
    <div className='Degree'>
      <h3>
        {degree}
      </h3>
      <p>
        {description}
      </p>
      <h4>
        institution:
        {' '}
        {institution}
      </h4>
      <div className='flexBetween'>
        <p>
          <p className='date'>Start date</p>
          {endDate}
        </p>
        <p>
          <p className='date'>End date</p>
          {startDate}
        </p>

      </div>
    </div>
  );
};

export default Degree;

