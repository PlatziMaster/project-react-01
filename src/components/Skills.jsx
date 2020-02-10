import React from 'react';

export default function Skills(props) {
  return (
    <div className="General__main">
      <div>
        <h2 className="Skills-title">Habilidades</h2>
        {Object.values(props).map((item, index) => (
          <p className="Skills-item" key={index}>
            <b>Skill:</b> {item.name} <b>Porcentaje:</b> {item.percentage}
          </p>
        ))}
        {/* <p className="Skills-item">Lorem ipsum dolor</p> */}
        {/* <p className="Skills-item">Lorem ipsum dolor</p> */}
      </div>
    </div>
  );
}
