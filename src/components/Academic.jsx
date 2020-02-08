import React from 'react';
import AcademicItem from './AcademicItem.jsx'
import '../styles/components/Academic.styl';

const Academic = (props) => {
  let i = 1;
  return (
    <div className='Academic'>
      <div className='Academic-title'>
        Education
      </div>
      <div className='Academic-items'>
        {props[0] ?
          (Object.keys(props).map(item => <AcademicItem key={i++} {...props[item]} />)) :
          (<div className='Academic-item'> Ninguno </div>) }
      </div>
    </div>
  );
};

export default Academic;
