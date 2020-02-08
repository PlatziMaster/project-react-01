import React, { useState, useEffect } from 'react';
import '../styles/components/Languages.styl';
import { _languages_ } from '../__mocks__/styleMock';

function Languages(props) {
  const [languages, setLanguages] = useState(_languages_);

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      setLanguages(props.languages);
    }
  });

  return (
    <div className="Languages section-short">
      <div className="Languages-title">Languages</div>
      <div className="Languages-items">
        {languages.map(item => (
          <div key={item.name} className="Languages-item">{`${item.name} (${item.percentage})`}</div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
