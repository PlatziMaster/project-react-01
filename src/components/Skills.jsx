import React from 'react';
import '../styles/components/Skills.styl';

const Skills = (props) => {
  const {
    skills = [
      {
        'name': 'babbab',
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
      <h1 className='Skills-title Subtitle'>
        Skills
      </h1>
      {skills.map(item => (
        <section key={item.name} className='Skills-item'>
          <div className='Item-info'>
            <div className='Item-name'>
              {item.name}
            </div>
            <div className='Item-percentage'>
              {item.percentage}
            </div>
          </div>
          <progress max='100' value={parseInt(item.percentage.split('%'), 10)} />
        </section>
      ))}
    </section>
  );
};

export default Skills;
