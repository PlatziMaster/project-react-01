import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children, avatar }) => {
  return (
    <div className='Header'>
      <div className='Header__photoContainer'>
        <img src='/src/utils/perfilFinal.png' alt='profile' />
      </div>
      <div>
        { children}
      </div>

    </div>
  );
};

export default Header;
