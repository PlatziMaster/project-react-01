import React from 'react';

import '../styles/components/Interest.styl';

const Interest = ({ interest = [] }) => {
  return (
    <section className="Interest">
      <h1 className="Interest-title">Interest</h1>
      <div className="Interest-content">
        {interest.map(int => (
          <h4 key={int} className="Interest-item">
            {int}
          </h4>
        ))}
      </div>
    </section>
  );
};

export default Interest;
