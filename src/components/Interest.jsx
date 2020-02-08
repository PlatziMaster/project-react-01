import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ interest }) => {
  return (
    <div className='Interest'>
      <h3 className='Interest-title'>Interests</h3>
      <ul>
        {
          (interest) ? (
            interest.map(item => (
              <li className='Interest-item' key={item}>{item}</li>
            ))
          ) :
            (
              <>
                <div className='Interest-item' />
                <div className='Interest-item' />
                <div className='Interest-item' />
              </>
            )
        }
      </ul>
    </div>
  );
};

export default Interest;
