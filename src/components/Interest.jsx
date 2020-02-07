import React from 'react';
import InterestItem from './InterestItem';
import '../styles/components/Interest.styl';

const Interest = (props) => {
  let i = 0;
  return (
    <div className='Interest'>
      <div className='Interest-title'>
        Interests
      </div>
      <div className='Interest-items'>
        {props[0] ?
          (Object.keys(props).map(item => <InterestItem key={i++} item={props[item]} />)) :
          (<div className='Interest-item'> Ninguna </div>) }
      </div>
    </div>
  );
};

export default Interest;
