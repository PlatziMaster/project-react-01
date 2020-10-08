import React from 'react';
import '../../styles/components/Languages.css';

const Languages = ({ languages = [{}, {}, {}] }) => {
  return (
    <div className='Languages__container'>
      <h2 className='Languages__title'>Languages</h2>
      <img className='imagen' src='../../images/traductor.svg' alt='50px' width='50px' />
      <div className='Languages__text'>
        {languages.map((item, index) => (
          <section className='Languages-item' key={element.name}>
            <h3 className='item'>{item.name}</h3>
            <p className='item'>{item.percentage}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Languages;
