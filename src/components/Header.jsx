import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => {
  return (
    <div className="Header">
      <div className="Header-title" />
      <img
        className="Header-avatar"
        alt="Cristobal Avatar"
        src="https://avatars3.githubusercontent.com/u/16980304?s=460&v=4"
      />
      {children}
    </div>
  );
};

export default Header;