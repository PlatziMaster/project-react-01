import React from 'react';
import '../styles/components/Skills.styl';

const Skills = ({skills}) => {
    return (
        <section className="Skills">
            <h3 className="Skills-title">Skills</h3>
            <ul className="Skills-list">
                <li className="Skills-item">{skills[0].name}</li>
                <li className="Skills-item">{skills[1].name}</li>
                <li className="Skills-item">{skills[2].name}</li>
            </ul>
        </section>
    );
}

export default Skills;