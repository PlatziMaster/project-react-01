import React from 'react';
import '../styles/components/Header.styl';
const Header = ({ children, header_title, picture, header_job }) => (
  <div className="Header">
    <img src={picture} alt="Profile Picture" />
    <div className="Header-texts">
      <h1 className="Header-title">{header_title}</h1>
      <p className="Header-jobTitle">{header_job}</p>
      {children}
    </div>
  </div>
);

export default Header;
