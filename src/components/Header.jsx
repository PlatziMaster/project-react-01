import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => {
  return (
    <div className="Header">
      <div className="Header-title" />
      <img
        className="Header-avatar"
        alt="Jeff Avatar"
        src="https://ui-avatars.com/api/?name=Jefferson+Aguiar&size=1028"
      />
      {children}
    </div>
  );
};

export default Header;
