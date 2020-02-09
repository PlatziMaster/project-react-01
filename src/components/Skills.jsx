import React from 'react';

const Skills = ({ skills }) => {

  return (
    <div className='Skills'>
      <div className='Skills-title'>
        <h2>Skills</h2>
      </div>
      <div className='Skills-container'>
        {skills !== undefined ? (
          skills.map((item) => {
            return (
              <div key={item.name} className='Skills-item'>
                {item.name}
                -
                {item.percentage}
                <br />
              </div>
            );
          })) : (
          (
            <>
              <div className='Skills-item' />
              <div className='Skills-item' />
              <div className='Skills-item' />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Skills;
