import React from 'react';
import Filler from './Filler';
import '../styles/components/LanguagesItem.styl';

const LanguagesItem = (props) => {
  return (
    <>
      <div className='Languages-item'>
        {props.name}
        {' '}
        -
        {' '}
        {props.percentage}
      </div>
      <div className='Languages-item-progress-bar'>
        <Filler percentage={props.percentage} />
      </div>
    </>
  );
};

export default LanguagesItem;
