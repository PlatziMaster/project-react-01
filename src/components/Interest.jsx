/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ interest }) => {
  return (
    <div className='Interest'>
      <h2 className='titleLabel'>Interest</h2>
      {interest && interest.map((elemento, indice, array) => {
        console.log(elemento);
        switch (elemento) {
          case 'User Experience':
            return (
              <p className='interestTarget'>
                {elemento}
                <img className='logoImage' src='/src/utils/ux.png' atl='' />
              </p>
            );
          case 'Responsive design':
            return (
              <p className='interestTarget'>
                <img className='logoImage' src='/src/utils/layout.png' atl='' />
                {elemento}

              </p>
            );
          case 'Security':
            return (
              <p className='interestTarget'>
                {elemento}
                <img className='logoImage' src='/src/utils/authentic.png' atl='' />
              </p>
            );
          default: return null;
        }

      })}
    </div>
  );
};

export default Interest;
