import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children, title, job }) => {
  return (
    <div className='Header'>
      <div className='container'>
        <figure className='Header-avatar'>
          <h1 className='Header-title'>{title}</h1>
        </figure>
        <h2 className='Header-job-title'>{job}</h2>
        {children}
      </div>

    </div>
  );
};

export default Header;
