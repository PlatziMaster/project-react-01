import React from 'react';
import '../styles/components/Languages.css';

const Languages = (props) => {
  const languages = Object.values(props);
  return (
    <div className='Languages'>
      <h2 className='Languages-title'>Languages</h2>
      {languages.map(item => (
        <div className='Languages-item'>
          <h3>{item.name}</h3>
          <h4>{item.percentage}</h4>
        </div>
      ))}
    </div>
  );
};

export default Languages;
