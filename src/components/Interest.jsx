import React from 'react';

const Interest = (Interest) => {
  return (
    <div>
      <ul>
        <h2 className='interest-title'>Interest</h2>
      </ul>
      <h4>
        {Interest.info.map(item => <ul key={item}>{item}</ul>)}
      </h4>
    </div>
  );
};

export default Interest;
