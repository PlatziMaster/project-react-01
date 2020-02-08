import React from 'react';
import { useSelector } from 'react-redux';
import { Progress } from 'reactstrap';

const Skill = () => {
  const skills = useSelector(state => state.user.skills);
  return (
    <>
      {skills ? (
        <>
          {skills.map(skill => (
            <div className='skill_item'>
              <h4>{`${skill.name} ${skill.percentage} %`}</h4>
              <div className='progress_br'>
                <Progress color='info' value={skill.percentage} />
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>Aún no se ha subido información</p>
      )}
    </>
  );
};

export default Skill;
