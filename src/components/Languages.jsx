import React from 'react';

const Languages = (lan) => {
  return (
    <div>
      <ul>
        <h2 className='languages-title'>Languages</h2>
      </ul>
      <h4>
        {lan.info.map(item => <ul key={item.name}>{`${item.name}: ${item.percentage}`}</ul>)}
      </h4>
    </div>
  );
};

export default Languages;
