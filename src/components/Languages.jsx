import React from 'react';
import '../styles/components/Language.styl';

const Languages = (props) => {
  const {
    languages,
  } = props;

  return (
    <section className='Languages Box'>
      <h1 className='Languages__title Subtitle'>
        Languages
      </h1>
      {languages.map(item => (
        <section key={item.name} className='Languages__item'>
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

export default Languages;
