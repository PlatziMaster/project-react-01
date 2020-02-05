import React from 'react';
import Language from './Language';

import '../styles/components/Skill.styl';

const Languages = ({ languages }) => {
  return (
    <div className='Languages'>
      <h2>Languages</h2>
      {languages && languages.map((language) => {
        return (
          <Language {...language} />
        );
      })}
    </div>
  );
};

export default Languages;

