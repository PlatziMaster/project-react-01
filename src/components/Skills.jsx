import React from 'react';
import '../styles/components/Skills.styl';

const skills = {
  title: 'Skills',
  items: [
    'React',
    'Redux',
    'CSS',
    'NodeJS',
    'Javascript',
    'Angular',
    'PHP',
    'MongoDB',
    'Firebase',
    'MariaDB',
    'Redis',
    'HTML5',
    'Git',
    'SCRUM',
  ],
};

const Skills = () => {
  return (
    <div className='Skills'>
      <h3 className='Skills-title'>{skills.title}</h3>
      <ul className='Skills-list'>
        {skills.items.map(item => (<li className='Skills-item' key={item}>{item}</li>))}
      </ul>
    </div>
  );
};

export default Skills;
