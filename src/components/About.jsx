import React from 'react';
import '../styles/components/About.styl';

const About = ({phone, email, website, address}) => {
    return (
        <section className="About">
            <h3 className="About-title"></h3>
            <ul>
                <li className="About-item">Telephone: {phone}</li>
                <li className="About-item">Email: {email}</li>
                <li className="About-item">Website: {website}</li>
            </ul>
            <p className="About-adress">Address: {address}</p>
        </section>
    );
}

export default About;