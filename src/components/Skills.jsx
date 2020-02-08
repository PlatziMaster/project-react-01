import React,{useState, useEffect} from 'react';
import '../styles/components/Skills.styl';
import SkillMeter from './SkillMeter';
import { _skills_ } from '../__mocks__/styleMock';

function Skills(props) {
  const [skills, setSkills] = useState(_skills_);

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      setSkills(props.skills);
    }
  });
  return (
    <div className="Skills section-short">
      <div className="Skills-title">Skills</div>
      <div className="Skills-items">
        {skills.map((item, index) => (
          <div className="Skills-item" key={index}>
            <div className="Skills-item__name" key={item.name}>
              {item.name}
            </div>
            <SkillMeter percentage={item.percentage} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
