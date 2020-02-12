import React from 'react';

const Skills = skills => (
  <div className='academic'>
    <ul className='academic-title__title-list'>
      <h4 className='academic-titile__h3'>{`${skills.name} : ${skills.percentage}`}</h4>
    </ul>
  </div>
);

export default Skills;
