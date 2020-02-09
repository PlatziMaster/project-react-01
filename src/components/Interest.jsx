import React from 'react';

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
      <p>{interest}</p>
    </div>
  );
};

export default Interest;
