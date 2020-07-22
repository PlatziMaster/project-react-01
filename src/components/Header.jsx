import React from 'react';
import '../styles/components/Header.styl';
const Header = ({ children, header_title, picture, header_job }) => (
  <div className="Header-container">
    <img src={picture} alt="Profile Picture" />
    <h1 className="Header-title">{header_title}</h1>
    <p className="Header-job-title">{header_job}</p>
    {children}
  </div>
);

export default Header;
