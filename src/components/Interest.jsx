import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ interest }) => {
  const interestArray = interest || Array(3).fill(1);
  return (
    <div className='Interest section'>
      <h2 className='Interest-title'> My Interests</h2>
      <div className='Interest-items'>
        <ul className='Interest-list'>
          {interestArray.map((item, index) => {
            return (
              <li className='Interest-item' key={index}><p>{item}</p></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Interest;
