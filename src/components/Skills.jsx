import React from 'react';
import CardSkill from './CardSkill';
import '../styles/components/Skills.styl';

const Skills = ({ skills }) => {
  const renderItems = () => {
    if (skills.length === 0) return (<div>No hay Habilidades</div>);
    return skills.map((skill, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className='Skills-item' key={idx}>
        <CardSkill title={skill.name} percent={skill.percentage} color={skill.color} />
      </div>
    ));
  };

  return (
    <div className='Skills'>
      <div className='Skills-container container'>
        <h2 className='Skills-title'>Habilidades</h2>
        {renderItems()}
      </div>
    </div>
  );
};

export default Skills;
