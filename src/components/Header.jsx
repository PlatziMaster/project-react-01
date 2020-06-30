import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ src, children }) => {
  return (
    <div className="Header">
      <img src={src} alt="Logo" className="Header-image" />
      {/* <h1 className="Header-title"></h1> */}
      {children}
    </div>
  )
}

export default Header;