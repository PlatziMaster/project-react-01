import React from 'react';
import '../styles/components/SkillMeter.styl';

function SkillMeter({ percentage }) {
  const style = {
    width: percentage,
    backgroundColor: 'MEDIUMPURPLE',
    height: '25px',
  };

  return (
    <div className="Skill-meter__container">
      <div style={style} />
    </div>
  );
}

export default SkillMeter;
