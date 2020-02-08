import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  return (
    <div className='Languages'>
      <h3 className='Languages-title'>Languages</h3>
      {
        (languages) ? (
          languages.map(item => (
            <ul key={item.name}>
              <li className='Languages-item'>{`${item.name}: ${item.percentage}`}</li>
            </ul>
          ))
        ) :
          (
            <>
              <div className='Languages-item' />
              <div className='Languages-item' />
              <div className='Languages-item' />
            </>
          )
      }
    </div>
  );
};

export default Languages;
