import React from 'react';
import '../../styles/components/Experience.css';

const Experience = ({ experience = [{}, {}, {}, {}] }) => {
  return (
    <div className='Experience__container'>
      <h2 className='Experience__title'>Experience</h2>
      <img className='imagen' src='../../images/experiencia.svg' alt='50px' width='50px' />
      <div className='Experience__text'>
        { experience.map((element, startDate) => (
          <section className='Experience-item' key={element.startDate}>
            <h3 className='item'>{element.company}</h3>
            <p className='item'>{element.jobTitle}</p>
            <p className='item'>{element.jobDescription}</p>
            <p className='item'>{element.startDate}</p>
          </section>
        ))
        }
      </div>

    </div>
  );
};

export default Experience;
