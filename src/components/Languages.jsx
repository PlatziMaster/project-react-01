import React from 'react';

const Languages = ({ languages }) => {
  const profileLangs =
    languages || Array(3).fill({ name: 'test', percentage: '100%' });

  const languagesList = profileLangs.map((language, index) => (
    <li key={`${language.name}-${index}`} className="Languages-item">
      {language.name}:{language.percentage}
    </li>
  ));

  return (
    <section>
      <div className="container">
        <div className="Languages">
          <h1 className="Languages-title">Languages</h1>

          <ul>{languagesList}</ul>
        </div>
      </div>
    </section>
  );
};

export default Languages;
