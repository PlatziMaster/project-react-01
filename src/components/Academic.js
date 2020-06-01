import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ info = [] }) => {
  return (
    <div className='Academic'>
      <h3 className='Academic-title'>Academic title</h3>
      {
        info.map((item, index) => (
          <p className='Academic-item' key={item.id}>
            <b>{ item.degree }</b>
            <br />
            { item.description }
            <br />
            { item.startDate }
            {' '}
            -
            { item.endDate }
            <br />
            { item.institution }
          </p>
        ))
      }
    </div>
  );
};

export default Academic;
