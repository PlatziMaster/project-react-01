import React from 'react';
import '../styles/components/Languages.styl';
const Languages = ({languages}) => {
  return (
    <div className="Languages card shadow">
      <h1 className="Languages-title">Languages</h1>
      <ul>
        {languages &&
          languages.length > 0 &&
          languages.map(language => (
            <li className="Languages-item" key={language.name}>
              <h4>{language.name}</h4>
              <progress max={100} value={language.percentage}></progress>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Languages;
