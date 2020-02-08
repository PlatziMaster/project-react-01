import React from 'react';

import '../styles/components/About.styl';

const About = ({ about = [] }) => {
  return (
    <div className="About">
      <h4 className="About-title">About</h4>
      <div>
        {about.map(social => (
          <div key={social.name} className="About-item">
            <a href={social.url} target="_blank" rel="noopener noreferer">
              {social.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
