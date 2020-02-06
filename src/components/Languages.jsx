import React from 'react';
import '../styles/components/Language.styl';

const Languages = (props) => {
  const {
    Languages = [
      {
        'name': 'Spanish',
        'percentage': '90',
      },
      {
        'name': 'English',
        'percentage': '50',
      },
    ],
  } = props;

  return (
    <section className='Languages Box'>
      <h1 className='Languages__title Subtitle'>
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
            %
            <progress className='Languages__item-percentage' max='100' value={item.percentage} />
          </p>
        </section>
      ))}
    </section>
  );
};

export default Languages;
