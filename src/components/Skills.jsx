import React from 'react';

const Skills = ({ name, percentage, deatil, version }) => {
  return (
          <div className ='Skills-detail'>
            <h3 className='Skills-title'>{name}</h3>
             <p className='Skills-item'>{version}</p>
             <p className='Skills-item'>{percentage}</p>
             <p className='Skills-item'>{deatil}</p>
          </div>
        
  );
};

export default Skills;
