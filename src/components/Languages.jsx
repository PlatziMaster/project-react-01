import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  return (
    <div className='Languages'>
      <h3 className='Languages-title'>Languages</h3>
      {
        (languages) ? (
          languages.map(item => (
            <div className='container'>
              <p>{`${item.name}: ${item.percentage} `}</p>
              <progress className='progress' value={parseInt(item.percentage.substring(-1))} max="100"></progress>
            </div>
          ))
        ) : null
      }
    </div>
  );
};

export default Languages;
