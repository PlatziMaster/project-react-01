import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => {
  return (
    <div>
      <h2 className='Header-title'>My CV</h2>
      {children}
    </div>
  );
};
export default Header;
