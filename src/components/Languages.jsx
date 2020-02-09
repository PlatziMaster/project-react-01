import React from 'react';

const Languages = ({ languages }) => {
  return (
    <div className='Languages'>
      <div className='Languages-title'>
        <h2>Languages</h2>
      </div>
      <div className='Languages-container'>
        {languages !== undefined ?
          languages.map((item) => {
            return (
              <LanguagesItem
                key={item.name}
                {...item}
              />
            );
          }) : (
            <>
              <div className='Languages-item' />
              <div className='Languages-item' />
              <div className='Languages-item' />
            </>
          )}
      </div>
    </div>
  );
};

const LanguagesItem = ({ name, percentage }) => {
  return (
    <div className='Languages-item'>
      {name}
      -
      {percentage}
    </div>
  );
};

export default Languages;
