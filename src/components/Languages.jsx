import React, { useEffect } from 'react';

import useLevelDraw from '../utils/useLevelDraw';

import '../styles/components/Languages.styl';

const Languages = ({ languages = [], test = false }) => {

  if (test === false) {
    useEffect(() => {
      languages.map((language, index) => {
        const perDrawString = language.percentage;
        const perDrawNumber = perDrawString.split('%');
        const elements = document.getElementsByClassName('Languages-item');
        if (elements[index].childNodes[0].id === language.name) {
          useLevelDraw(elements[index].childNodes[0], parseInt(perDrawNumber[0]));
        }
      });
    }, [languages]);
  }

  return (
    <section className="Languages">
      <h1 className="Languages-title">Languages</h1>
      <div className="Languages-content">
        {languages.map(language => (
          <div key={language.name} className="Languages-item">
            <canvas id={language.name} />
            <div>
              <h4>{language.name}</h4>
              <p>{language.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
