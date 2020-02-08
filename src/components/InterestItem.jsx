import React from 'react';
import '../styles/components/InterestItem.styl';

const InterestItem = (props) => {
  return (
    <div className='Interest-item'>
      {props.item}
    </div>
  );
};
export default InterestItem;
