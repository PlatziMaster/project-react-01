import React, { useState, useEffect } from 'react';
import '../styles/components/Interest.styl';
import { _interest_ } from '../__mocks__/styleMock';

function Interest(props) {
  const [interest, setInterest] = useState(_interest_);

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      setInterest(props.interest);
    }
  });

  return (
    <div className="Interest section-short">
      <div className="Interest-title">Interest</div>
      <div className="Interest-items">
        {interest.map(item => (
          <div key={item} className="Interest-item">{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Interest;
