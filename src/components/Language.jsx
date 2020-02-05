import React from 'react';

const Language = ({ name, percentage }) => {
  switch (name) {
    case 'Spanish':
      return (
        <div className='skill'>
          <div className='skill-container'>
            <p className='skill-name'>
              {name}
            </p>
            <p className='skill-percentage'>
              {percentage}
            </p>
          </div>
          <img className='logoImage' src='/src/utils/spanish-language.png' atl='' />
        </div>
      );
    case 'English':
      return (
        <div className='skill'>
          <div className='skill-container'>
            <p className='skill-name'>
              {name}
            </p>
            <p className='skill-percentage'>
              {percentage}
            </p>
          </div>
          <img className='logoImage' src='/src/utils/england.png' atl='' />
        </div>
      );
    default: return null;
  }
};

export default Language;
