import React from 'react';

const Languages = ({ languages }) => {
  const profileLangs =
    languages || Array(3).fill({ name: 'test', percentage: '100%' });

  const languagesList = profileLangs.map((language, index) => (
    <li key={`${language.name}-${index}`} className="Languages-item">
      {language.name}: <span>{language.percentage}</span>
    </li>
  ));

  return (
    <section>
      <div className="container">
        <div className="Languages">
          <h2 className="Languages-title">Languages</h2>
          <span className="horizontal-line"></span>
          <ul>{languagesList}</ul>
        </div>
      </div>
    </section>
  );
};

export default Languages;
