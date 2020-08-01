import React from 'react';

const About = ({ profession, phone, email, website, address }) => {
  return (
    <div className="About">
      <h2 className="About-title">{profession}</h2>
      <ul>
        <li className="About-item">{phone}</li>
        <li className="About-item">{email}</li>
        <li className="About-item">{website}</li>
      </ul>

      <p>
        {address}
      </p>
    </div>
  );
};

export default About;
