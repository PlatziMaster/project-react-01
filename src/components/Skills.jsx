import React, { useEffect } from 'react';

import useLevelDraw from '../utils/useLevelDraw';

import '../styles/components/Skills.styl';

const Skills = ({ skills = [], test = false }) => {

  if (test === false) {
    useEffect(() => {
      skills.map((skill, index) => {
        const perDrawString = skill.percentage;
        const perDrawNumber = perDrawString.split('%');
        const elements = document.getElementsByTagName('canvas');
        if (elements[index].id === skill.name) {
          useLevelDraw(elements[index], parseInt(perDrawNumber[0]));
        }
      });
    }, [skills]);
  }

  return (
    <section className="Skills">
      <h1 className="Skills-title">Skills</h1>
      <div className="Skills-content">
        {skills.map(skill => {
          return (
            <div key={skill.name} className="Skills-item">
              <canvas id={skill.name} />
              <div>
                <h4>{skill.name}</h4>
                <p>{skill.percentage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
