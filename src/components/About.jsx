/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import '../styles/components/About.styl';
import { _aboutMe_ } from '../__mocks__/styleMock';

function About(props) {
  const [about, setAbout] = useState(_aboutMe_);

  useEffect(() => {
    if (Object.keys(props).length > 0) {
      setAbout(props);
    }
  });

  return (
    <div className="About">
      <div className="About-title">{about.name}</div>
      <div className="About-job-title">{about.profession}</div>
      <div className="About-contact">
        <div className="About-item">
          <div className="About-item__label">Phone </div>
          <div className="About-item__data">{about.phone}</div>
        </div>
        <div className="About-item">
          <div className="About-item__label">Email </div>
          <div className="About-item__data">{about.email}</div>
        </div>
        <div className="About-item">
          <div className="About-item__label">website </div>
          <div className="About-item__data">{about.website}</div>
        </div>
      </div>
      <div className="About-contact">
        <div className="About-item">
          <div className="About-item__label">Address</div>
          <div className="About-item__data">{about.address}</div>
        </div>
      </div>
    </div>
  );
}

export default About;
