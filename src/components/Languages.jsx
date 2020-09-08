import React from 'react';

const Languages = (props) => {
  return (
    <div>
      <h2 className="Academic-title">Languages</h2>
      {props.languages.map(sk => (
        <div className="Academic__card">
          <h3 className="Academic__institution">{sk.name}</h3>
          <h4 className="Academic__degree">{sk.percentage}</h4>
        </div>
      ))}
    </div>
  );
};

export default Languages;
