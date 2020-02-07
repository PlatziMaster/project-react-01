import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  return (
    <div className='Languages'>
      <h3 className='Languages-title'>Languages</h3>
      {
        (languages) ? (
          languages.map(item => (
            <ul className='Languages-item' key={item.name}>
              <li >{`${item.name}: ${item.percentage}`}</li>
            </ul>
          ))
        ) : null
      }
    </div>
  );
};

export default Languages;
