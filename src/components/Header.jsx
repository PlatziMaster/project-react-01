import React from 'react';

const Header = ({ children }) => {
  return (
    <header>
      <h1 className='Header-title'>Your Name</h1>
      {children}
    </header>
  );
};

export default Header;
