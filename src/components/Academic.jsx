import React from 'react';

export default function Academic(props) {
  return (
    <div className="General__main">
      <div>
        <h2 className="Academic-title">UAEM Mex</h2>
        {Object.values(props).map((item, index) => (
          <p className="Academic-item" key={index}>
            <b>Experiencia:</b> {item.degree} <b>Company:</b> {item.description}
          </p>
        ))}
      </div>
    </div>
  );
}
