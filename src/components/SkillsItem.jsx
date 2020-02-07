import React from 'react';
import Filler from './Filler';
import '../styles/components/SkillsItem.styl';

const SkillItem = (props) => {
  return (
    <div className='Skills-item'>
      {props.name}
      {' '}
      -
      {' '}
      {props.percentage}
      <div className='Skills-item-progress-bar'>
        <Filler percentage={props.percentage} />
      </div>
    </div>
  );
};
export default SkillItem;
