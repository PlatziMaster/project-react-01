import React from 'react';
import '../styles/components/Skills.styl';

const Skills = (props) => {
  const {
    Skills = [
      {
        'name': 'HTML5',
        'percentage': '75',
      },
      {
        'name': 'CSS',
        'percentage': '25',
      },
      {
        'name': 'JavaScript',
        'percentage': '55',
      },
      {
        'name': 'React',
        'percentage': '90',
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
          <div className='Item-info'>
            <div className='Item-name'>
              {item.name}
            </div>
            <div className='Item-percentage'>
              {item.percentage}
              %
            </div>
          </div>
          <progress max='100' value={item.percentage} />
        </section>
      ))}
    </section>
  );
};

export default Skills;
