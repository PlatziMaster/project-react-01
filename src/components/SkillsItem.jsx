import React from 'react';
import '../styles/components/SkillsItem.styl';

const SkillsItem = ({ name, percentage }) => (
  <div className="Skills-items">
    <h4>{name}</h4>
    <p>{percentage}</p>
  </div>
);

export default SkillsItem;
