import React from 'react';

const Interest = ({ name, description, experince, framework }) => {
  return (
    <>
    <h3 className='Interest-title'>{name}</h3>
    <div className ='Interest-detail'>
      <p className='Interest-item'>{framework}</p>
      <p className='Interest-item'>{description}</p>
      <p className='Interest-item'>{experince}</p>
    </div>
    </>
  );
};

export default Interest;
