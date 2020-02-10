import React from 'react';
import '../styles/components/CardSkill.styl';

const CardSkill = ({ title, color, percent }) => (
  <div className='skill'>
    <h6 className='skill__title'>{title}</h6>
    <div
      className='skill__loader'
      style={{
        background: `linear-gradient(90deg, ${color || 'yellow'} ${percent}, white ${percent})`,
      }}
    >
      <p>{percent}</p>
    </div>
  </div>
);

export default CardSkill;
