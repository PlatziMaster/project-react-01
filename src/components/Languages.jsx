import React from 'react';
import Language from './Language';

import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  return (
    <div className='Languages'>
      <h2 className='titleLabel'>Languages</h2>
      {languages && languages.map((language) => {
        return (
          <Language {...language} />
        );
      })}
    </div>
  );
};

export default Languages;

