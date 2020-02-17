import React from 'react';
import '../styles/components/Interest.css';

const Interest = (props) => {
  const { interest } = props;
  return (
    <div className='Interest'>
      <h2 className='Interest-title'>Interest</h2>
      {interest !== undefined && interest.map((item, index) => (
        <div className='Interest-item' key={`item_${index}`}>
          <h4>{item}</h4>
        </div>
      ))}
    </div>
  );
};

export default Interest;
