import React from 'react';

const Interest = (props) => {
  return (
    <div>
      <h2 className="Academic-title">Interest</h2>
      {props.interest.map(interest => (
        <div className="Academic__card">
          <h3 className="Academic__institution">{interest}</h3>
        </div>
      ))}
    </div>
  );
};

export default Interest;
