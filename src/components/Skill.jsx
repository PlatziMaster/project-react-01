import React from 'react';
import '../styles/components/Skill.styl';

const Skill = ({ name, percentage }) => {
  return (
    <div className='Skill'>
      <div>
        {name}
      </div>
      <div>
        {percentage}
      </div>
    </div>
  );
};

export default Skill;
