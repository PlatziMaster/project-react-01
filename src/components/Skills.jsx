/* eslint-disable react/no-array-index-key */
import React from 'react';

import '../styles/components/Skills.styl';

const skill = {
  name: 'HTML5',
  icon: 'https://www.flaticon.com/svg/static/icons/svg/152/152843.svg',
};

const Skills = ({ skills = [skill] }) => (
  <section className='Skills'>
    <h2 className='Skills-title'>Skills</h2>
    <ul className='Skills-item'>
      {skills.map((item, i) => (
        <li key={i} className='Skills-item'>
          {item.name}
          <img className='Skills-item' src={item.icon} alt={item.name} />
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
