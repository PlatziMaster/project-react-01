import React from 'react';
import '../styles/components/About.styl';

const About = ({phone, email, website, address}) => {
    return (
        <section className="About">
            <ul>
                <li className="About-phone">Telephone: {phone}</li>
                <li className="About-email">Email: {email}</li>
                <li className="About-website">Website: {website}</li>
            </ul>
            <p className="About-adress">Address: {address}</p>
        </section>
    );
}

export default About;