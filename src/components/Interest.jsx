import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ interest }) => {
  const renderItems = () => {
    if (interest.length === 0) return <div>No hay intereses</div>;
    return interest.map((interest, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <p className='Interest-item' key={idx}>{interest}</p>
    ));
  };

  return (
    <div className='Interest'>
      <div className='Interest-container container'>
        <h2 className='Interest-title'>Intereses</h2>
        {renderItems()}
      </div>
    </div>
  );
};

export default Interest;
