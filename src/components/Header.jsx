import React, { useEffect } from 'react';


const Header = ({ children, title }) => {
  return (
    <section className='Header'>
      <h1 className='Header-title'>{title}</h1>
      {children}
    </section>
  )
}

export default Header;