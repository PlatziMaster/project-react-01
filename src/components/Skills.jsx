import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skills = ({ skills, index }) => {
  const skillsArray = skills || Array(3).fill(1);
  const skillsTitle = skills || Array(1).fill(1);
  return (
    <>
      {skillsTitle.map(item => (
        <h2 className='mb-3 Skills-title'>
          {item.category}
        </h2>
      ))}

      {skillsArray.map(item => (
        <>
          <h5 className='Skills-item' key={index}>{item.name}</h5>
          <ProgressBar animated variant='success' now={Number(item.percentage)} key={index} />
        </>
      ))}
    </>
  );
};

export default Skills;
