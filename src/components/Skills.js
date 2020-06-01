import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ info = [] }) => {
  return (
    <div className='Skills'>
      <h3 className='Skills-title'>Skills title</h3>
      <div>
        {
          info.map((item, index) => (
            <p className='Skills-item' key={item.id}>
              { item.name }
              {' '}
              (
              {item.percentage}
              )
            </p>
          ))
        }
      </div>
    </div>
  );
};

export default Skills;
