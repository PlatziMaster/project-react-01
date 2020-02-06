import React from 'react';
import Profile from '../images/profile.jpeg';
import '../styles/components/Header.styl';

const Header = () => {

  return (
    <div className="Header">
      <div className="Header-picture">
        <img src={Profile} alt="Usuario" />
      </div>
      <div className="Header-title">
        Header-title
      </div>
      <div className="Header-job-title">
        Header-job-title
      </div>
      <div className="Header-phone">
        Header-phone
      </div>
      <div className="Header-email">
        Header-email
      </div>
      <div className="Header-website">
        Header-website
      </div>
      <div className="Header-address">
        Header-address
      </div>
    </div>
  );
};

export default Header;

