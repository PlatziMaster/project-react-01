import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ skills }) => {
  return (
    <div className='Skills'>
      <h3 className='Skills-title'>Skills</h3>
      {
        (skills) ?
          (skills.map(item => (
            <>
              <div>
                {' '}
                {item.name}
                {' '}
              </div>
              <div className='c100 p12 small'>
                <span>
                  {' '}
                  {item.percentage}
                  {' '}
                </span>
                <div className='slice'>
                  <div className='bar' />
                  <div className='fill' />
                </div>
              </div>
            </>
          ))) : null
      }
    </div>
  );
};

export default Skills;
