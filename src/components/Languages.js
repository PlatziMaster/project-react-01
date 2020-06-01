import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ info = [] }) => {
  console.log('info :: ', info);
  return (
    <div className='Languages'>
      <h3 className='Languages-title'>Languages Title</h3>
      <div>
        {
          info.map((lang, index) => (
            <p className='Languages-item' key={lang.id}>
              { lang.name }
              {' '}
              (
              {lang.percentage}
              )
            </p>
          ))
        }
      </div>
    </div>
  );
};

export default Languages;
