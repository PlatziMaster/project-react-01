import React, { useEffect } from 'react';


const Header = ({ children, title }) => {
  return (
    <>
      <h1 className='Header-title'>{title}</h1>
      {children}
    </>
  )
}

export default Header;