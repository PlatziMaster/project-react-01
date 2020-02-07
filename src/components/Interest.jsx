import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ interest }) => {
  return (
    <div className='Interest'>
      <h3 className='Interest-title'>Interests</h3>
      <ul className='Interest-item'>
        {
          (interest) ? (
            interest.map(item => (
              <li key={item}> {item} </li>
            ))
          ) : null
        }
      </ul>
    </div>
  );
};

export default Interest;
