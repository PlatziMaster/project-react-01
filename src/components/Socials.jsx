import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faFacebookSquare,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

const Socials = ({ social }) => {
  const profileSocials =
    social ||
    Array(3).fill({ name: 'facebook', percentage: 'https://facebook.com/' });

  const returnIcon = name => {
    switch (name) {
      case 'facebook':
        return faFacebookSquare;
      case 'twitter':
        return faTwitterSquare;
      case 'github':
        return faGithubSquare;
      default:
        return faLinkedin;
    }
  };

  const socialList = profileSocials.map((social, index) => (
    <div key={`${social.name}-${index}`} className="Social-item">
      <FontAwesomeIcon icon={returnIcon(social.name)} />
      <p>{social.url}</p>
    </div>
  ));

  return (
    <section>
      <div className="container">
        <div className="Social">
          <h2 className="Social-title">Contact</h2>
          <span className="horizontal-line"></span>
          <div className="Social-items">{socialList}</div>
        </div>
      </div>
    </section>
  );
};

export default Socials;
