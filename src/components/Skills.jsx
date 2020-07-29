import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Skills = ({ skills, index }) => {
  const skillsArray = skills || Array(3).fill(1);
  const skillsTitle = skills || Array(1).fill(1);
  return (
    <>
      {skillsTitle.map(item => (
        <h2 className='mb-3 Skills-title' key={item.id}>
          {item.category}
        </h2>
      ))}

      {skillsArray.map(item => (
        <React.Fragment key={item.id}>
          <h5 className='Skills-item'>{item.name}</h5>
          <ProgressBar animated variant='primary' now={Number(item.percentage)} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Skills;
