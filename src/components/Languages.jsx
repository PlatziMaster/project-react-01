import React from 'react';
import '../styles/components/Language.styl';

const Languages = (props) => {
  const {
    languages = [
      {
        'name': 'Spanish',
        'percentage': '90',
      },
      {
        'name': 'Portuguese',
        'percentage': '10',
      },
      {
        'name': 'English',
        'percentage': '60',
      },
    ],
  } = props;

  return (
    <section className='Languages Box'>
      <h1 className='Languages-title Subtitle'>
        Languages
      </h1>
      {languages.map(item => (
        <section key={item.name} className='Languages-item'>
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

export default Languages;
