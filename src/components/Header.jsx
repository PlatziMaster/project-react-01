import React from 'react';

const Header = ({ children, social }) => {
  return (
    <>
      <div className='Header-title'>
        {children}
      </div>
    </>
  );
};

export default Header;
