import React from 'react';
import '../styles/components/Skills.styl';

const Skills = (props) => {
  const {
    Skills = [
      {
        'name': 'HTML5',
        'percentage': '75%',
      },
      {
        'name': 'CSS',
        'percentage': '25%',
      },
      {
        'name': 'JavaScript',
        'percentage': '55%',
      },
      {
        'name': 'React',
        'percentage': '90%',
      },
    ],
  } = props;

  return (
    <section className='Skills Box'>
      <h1 className='Skills__title Subtitle'>
        Skills
      </h1>
      {Skills.map(item => (
        <section key={item.name} className='Skills__item'>
          <p className='Skills__item-name'>
            {item.name}
            {' '}
            |
            {' '}
            {item.percentage}
          </p>
        </section>
      ))}
    </section>
  );
};

export default Skills;
