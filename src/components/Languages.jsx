import React from 'react';
import CardSkill from './CardSkill';
import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  const renderItems = () => {
    if (languages.length === 0) return <div>No hay idiomas</div>;
    return languages.map((language, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className='Languages-item' key={idx}>
        <CardSkill title={language.name} percent={language.percentage} color={language.color} />
      </div>
    ));
  };

  return (
    <div className='Languages'>
      <div className='Languages-container container'>
        <div className='Languages-title'>Idiomas</div>
        {renderItems()}
      </div>
    </div>
  );
};

export default Languages;
