import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ info = [] }) => {
  const itemKey = () => {
    let count = 0;
    return `interest-key${count++}`;
  };

  return (
    <div className='Interest'>
      <h3 className='Interest-title'>Interest title</h3>
      <div>
        {
          info.map((item, index) => <p className='Interest-item' key={itemKey}>{ item }</p>)
        }
      </div>
    </div>
  );
};

export default Interest;
