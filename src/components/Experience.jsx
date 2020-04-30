import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({experience}) => {
    return (
        <section className="Experience">
            <h3 className="Experience-title">Experience</h3>
            <ul className="Experience-list">
                <li className="Experience-item">{experience[0].jobTitle}</li>
                <li className="Experience-item">{experience[1].jobTitle}</li>
                <li className="Experience-item">{experience[2].jobTitle}</li>
                <li className="Experience-item">{experience[3].jobTitle}</li>
            </ul>
        </section>
    );
}

export default Experience;