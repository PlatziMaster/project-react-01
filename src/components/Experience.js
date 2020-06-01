import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({ info = [] }) => {
  return (
    <div className='Experience'>
      <h3 className='Experience-title'>Experience Title</h3>
      <div>
        {
          info.map((item, index) => (
            <p className='Experience-item' key={item.id}>
              <b>{ item.company }</b>
              <br />
              { item.startDate}
              {' '}
              -
              { item.endDate }
              <br />
              { item.jobDescription }
            </p>
          ))
        }
      </div>
    </div>
  );
};

export default Experience;
