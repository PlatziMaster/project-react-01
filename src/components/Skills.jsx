import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({skills = [{"name":'Frontend'}, {"name":'Backend'}, {"name":'Deploys'}]}) => {
    return (
        <section className="Skills">
            <h3 className="Skills-title">Skills</h3>
            <ul className="Skills-list">
                {skills.map((skill, index) => {
                    return(<li key={"Skill " + (index + 1)} className="Skills-item">{skill.name}</li>)
                })}
            </ul>
        </section>
    );
}

export default Skills;