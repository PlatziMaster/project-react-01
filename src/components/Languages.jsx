import React from 'react';

export default function Languages(props) {
  return (
    <div className="General__main">
      <h2 className="Languages-title">Languages</h2>
      <div className="Languages-main">
        {Object.values(props).map((item, index) => (
          <p className="Languages-item" key={index}>
            <b>Idioma:</b> {item.name} <b>Porcentaje:</b> {item.percentage}
          </p>
        ))}
      </div>
    </div>
  );
}
