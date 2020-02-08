import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ academic }) => {
  return (
    <div className='Academic'>
      <h3 className='Academic-title'>Academic</h3>
      {
        (academic) ?
          academic.map(item => (
            <ul className='Academic-item' key={item.degree}>
              <li>{item.degree}</li>
              <li>{item.institution}</li>
              <li>{`${item.endDate} / ${item.startDate}`}</li>
            </ul>
          )) :
          (
            <>
              <div className='Academic-item' />
              <div className='Academic-item' />
              <div className='Academic-item' />
            </>
          )
      }
    </div>
  );
};

export default Academic;
