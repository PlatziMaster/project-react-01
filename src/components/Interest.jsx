import React from 'react';
import { Chip } from 'react-md';
import '../styles/components/Interest.styl';

const Interest = ({ interest }) => {
  return (
    <div className='Interest'>
      <div className='Interest-title'>
        <h2>Interest</h2>
      </div>
      <div className='Interest-container'>
        {interest !== undefined ?
          interest.map((item) => {
            return (
              <InterestItem
                key={item}
                interest={item}
              />
            );
          }) : (
            <>
              <div className='Interest-item' />
              <div className='Interest-item' />
              <div className='Interest-item' />
            </>
          )}
      </div>
    </div>
  );
};

const InterestItem = ({ interest }) => {
  return (
    <div className='Interest-item'>
      <Chip label={interest} />
    </div>
  );
};

export default Interest;
