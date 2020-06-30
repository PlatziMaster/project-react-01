import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({ skill1, skill2, skill3, skill4, percent1, percent2, percent3, percent4 }) => {
  return (
    <div className="Skills">
      <h1 className="Skills-title">Habilidades</h1>
      <p className="Skills-item">{skill1} - <span>{percent1}</span></p>
      <p className="Skills-item">{skill2} - <span>{percent2}</span></p>
      <p className="Skills-item">{skill3} - <span>{percent3}</span></p>
      <p className="Skills-item">{skill4} - <span>{percent4}</span></p>
    </div>
  )
}

export default Skills;