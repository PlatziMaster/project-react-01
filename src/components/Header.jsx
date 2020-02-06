import React from 'react';

const Header = ({ children }) => (
  <div className='Header'>
    <div className='Header-avatar'>Avatar</div>
    <div>
      <div className='Header-title'>Header-title</div>
      {children}
    </div>
  </div>
);

export default Header;
