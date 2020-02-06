import React from 'react';
import '../styles/components/Languages.styl';

const languages = {
  title: 'Languages',
  items: [
    {
      id: 1,
      language: 'English',
      level: 'Intermediate',
    },
    {
      id: 2,
      language: 'Spanish',
      level: 'Native',
    },
  ],
};

const Languages = () => {
  return (
    <div className='Languages'>
      <h3 className='Languages-title'>{languages.title}</h3>
      {
        languages.items.map(item => (
          <ul className='Languages-item' key={item.id}>
            <li>{`${item.language}: ${item.level}`}</li>
          </ul>
        ))
      }
    </div>
  );
};

export default Languages;
