import React from 'react';
import '../styles/components/App.styl';

const Languages = (props) => {
  const {
    Languages = [
      {
        'name': 'Spanish',
        'percentage': '90%',
      },
      {
        'name': 'English',
        'percentage': '50%',
      },
    ],
  } = props;

  return (
    <section className='Languages'>
      <h1 className='Languages__title'>
        Languages
      </h1>
      {Languages.map(item => (
        <section key={item.name} className='Languages__item'>
          <p className='Languages__item-name'>
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

export default Languages;
