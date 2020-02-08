import React from 'react';
import '../styles/components/Filler.styl';

const Filler = (props) => {
  return (
    <div className='Skills-item-filler' style={{ width: `${props.percentage}` }}>
    </div>
  );
};
export default Filler;
