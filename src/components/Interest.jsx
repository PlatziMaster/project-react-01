import React from 'react';

const Interest = ({ interests }) => {
  const profileInterests = interests || Array(3).fill('javascript');

  const interestsList = profileInterests.map((interest, index) => (
    <li key={`${interest}-${index}`} className="Interest-item">
      {interest}
    </li>
  ));

  return (
    <section className="Interest">
      <h1 className="Interest-title">Interest</h1>

      <ul>{interestsList}</ul>
    </section>
  );
};

export default Interest;
