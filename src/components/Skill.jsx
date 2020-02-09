/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/components/Skill.styl';

const Skill = ({ name, percentage }) => {
  switch (name) {
    case 'HTML5':
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
          <img className='logoImage' src='/src/utils/html-5.png' atl='' />
        </div>
      );
    case 'CSS':
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
          <img className='logoImage' src='/src/utils/css.png' atl='' />

        </div>
      );
    case 'JavaScript':
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
          <img className='logoImage ' src='/src/utils/js.png' atl='' />
        </div>
      );
    case 'React':
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
          <img className='logoImage skill-image' src='/src/utils/react.png' atl='' />
        </div>
      );
    default: return null;
  }
};

export default Skill;
