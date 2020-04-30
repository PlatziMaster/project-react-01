import React from 'react';
import '../styles/components/Experience.styl';

const Experience = ({experiences = [{"jobTitle":'Frontend Developer'}, {"jobTitle":'Backend Developer'}, {"jobTitle":'Fullstack Developer'}]}) => {
    return (
        <section className="Experience">
            <h3 className="Experience-title">Experience</h3>
            <ul className="Experience-list">
                {experiences.map((experience, index) => {
                    return(<li key={"Experience " + (index + 1)} className="Experience-item">{experience.jobTitle}</li>)
                })}
            </ul>
        </section>
    );
}

export default Experience;