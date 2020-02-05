import React from 'react';
import SocialMedia from './SocialMedia';

import '../styles/components/Social.styl';

const Skills = ({ social }) => {
  return (
    <div className='social'>
      <h2>Social</h2>
      {social && social.map((social) => {
        return (
          <SocialMedia {...social} />
        );
      })}
    </div>
  );
};

export default Skills;
