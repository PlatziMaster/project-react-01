import React from 'react';
import '../../styles/components/Skills.css';

const Skills = ({ skills = [{}, {}, {}, {}] }) => {
  return (
    <div className='Skills__container'>
      <h2 className='Skills__title'>Skills</h2>
      <img className='imagen' src='../../images/aumentar.svg' alt='50px' width='50px' />
      <div className='Skills__text'>
        {skills.map((item, index) => {
          return (
            <section className='Skills-item' key={item.name}>
              <h3 className='item'>{item.name}</h3>
              <p className='item'>{item.percentage}</p>
            </section>
          );
        })
        }
      </div>
    </div>
  );
};

export default Skills;
