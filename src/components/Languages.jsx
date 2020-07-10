import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ languages }) => {
  const languageItems = languages || Array(3).fill(1);
  return (
    <div className='Languages'>
      <h2 className='Languages-title'>Languages i know</h2>
      <div className='Language-list'>
        <ul className='Language-items'>
          {languageItems.map((item, index) => {
            return (
              <li className='Languages-item' key={index}>
                <h3>{item.name}</h3>
                <p>{item.percentage}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Languages;
