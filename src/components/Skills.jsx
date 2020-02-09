import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import '../styles/components/Skills.styl';

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
                <Progress
                  type='circle'
                  width={70}
                  percent={item.percentage}
                />
                {item.name}
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
