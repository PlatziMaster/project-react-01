import React from 'react'
import '../styles/components/Skills.styl'

const Skills = () => (
    <>
        <div className="Skylls">
            <h3 className="Skills-title">Skills</h3>
            <ul className="Skills-list">
                <li className="Skills-item">
                    <i className="fab fa-html5 fa-3x"></i>
                    <p>HTML</p>
                </li>
                <li className="Skills-item">
                    <i className="fab fa-css3-alt fa-3x"></i>
                    <p>CSS</p>
                </li>
                <li className="Skills-item">
                    <i className="fab fa-php fa-3x"></i>
                    <p>PHP</p>
                </li>
                <li className="Skills-item">
                    <i className="fab fa-js fa-3x"></i>
                    <p>JavaScript</p>
                </li>
            </ul>
        </div>
    </>
);

export default Skills;