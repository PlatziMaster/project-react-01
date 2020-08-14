import React from 'react';
import gravatar from '../utils/gravatar';

const Header = (props) => {
  const { title = 'Currículum Vitae', avatar = `${gravatar('gzaratet@gmail.com')}`, children } = props;
  return (
    <header className='Header'>
      <h1 className='Header-title'>{title}</h1>
      <section className='Header-content'>
        <figure>
          <img src={avatar} alt='avatar-profile' />
        </figure>
        {children}
      </section>
    </header>
  );
};

export default Header;
