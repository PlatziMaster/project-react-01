import React from 'react';
import '../styles/components/About.styl';

const About = ({ social, website }) => {
  return (
    <div className="About rounded shadow">
      <h2 className="About-title">About</h2>
      <div className="About-contact">
        <ul>
          {social &&
            social.length > 0 &&
            social.map((s, idx) => (
              <li className="About-item" key={`social-${idx}`}>
                <a href={s.url} target="_blank">
                  {s.name}
                </a>
              </li>
            ))}
          <li className="About-item">
            <a href={website} target="_blank">
              website
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
