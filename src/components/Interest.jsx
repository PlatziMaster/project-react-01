import React from 'react';

const Interest = ({ interest }) => {
  return (
    <div className='Interest'>
      <h2>Interest</h2>
      {interest && interest.map((elemento, indice, array) => {
        console.log(elemento);

        return (
          <p>{elemento}</p>
        );

      })}
    </div>
  );
};

export default Interest;
