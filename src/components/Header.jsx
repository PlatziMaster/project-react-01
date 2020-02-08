import React from 'react';

const Header = ({ children }) => {
  const profession = 'FrontEnd Developer';

  return (
    <header>
      <img src='https://arepa.s3.amazonaws.com/melissa.jpg' alt='avatar' />
      <div className='Header-titles'>
        <h1 className='Header-title'>Your Name</h1>
        <h3 className='Header-job-title'>{profession}</h3>
      </div>
      {children}
    </header>
  );
};

export default Header;
