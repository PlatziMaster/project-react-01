import React from 'react';

const Header = ({ children, name, profession, avatar }) => {

  return (
    <header>
      <img src={avatar} alt='avatar' />
      <div className='Header-titles'>
        <h1 className='Header-title'>{name}</h1>
        <h3 className='Header-job-title'>{profession}</h3>
      </div>
      {children}
    </header>
  );
};

export default Header;
