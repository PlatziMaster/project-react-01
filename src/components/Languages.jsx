import React from 'react';

const Languages = (props) => {
  const {
    title = 'Languages',
    languages = [
      {
        'id': 1,
        'name': 'Spanish',
        'percentage': '90',
      },
      {
        'id': 2,
        'name': 'English',
        'percentage': '60',
      },
    ],
  } = props;
  return (
    <section className='Languages'>
      <h1 className='Languages-title'>{title}</h1>
      {languages.map(item => (
        <div key={item.id} className='Languages-content'>
          <p className='Languages-item'>{item.name}</p>
          <p className='Languages-item'>{item.percentage}</p>
        </div>
      ))}
    </section>
  );
};

export default Languages;
