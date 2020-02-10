import React from 'react'
import '../styles/components/About.styl'

const About = () => (
    <>
        <h5 className="About-title">Sobre mi</h5>
        <ul className="About-list">
            <li className="About-item">
                <span>Programación</span>
            </li>
            <li className="About-item">
                <span>Desarrollo de software</span>
            </li>
            <li className="About-item">
                <span>Marketing digital</span>
            </li>
            <li className="About-item">
                <span>SEO</span>
            </li>
        </ul>
    </>
);

export default About;