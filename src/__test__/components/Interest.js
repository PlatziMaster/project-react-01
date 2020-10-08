import React from 'react';
import '../../styles/components/Interest.css';

const Interest = ({ interest = ['', '', '', '', ''] }) => {
  return (
    <div className='Interest__container'>
      <h2 className='Interest__title'>Interest</h2>
      <img className='imagen' src='../../images/intereses.svg' alt='50px' width='50px' />
      <div className='Interest__text'>
        {interest.map((item, index) => (<p className='Interest-item' key={element.item}>{item}</p>))}
      </div>
    </div>
  );
};

export default Interest;

