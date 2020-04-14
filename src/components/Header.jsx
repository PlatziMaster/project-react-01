import React from 'react';


const Header = ({ children, title, img }) => {
  return (
    <section className='Header'>
      <img src={img} alt={title}/>
      <h1 className='Header-title'>{title}</h1>
      {children}
    </section>
  )
}

export default Header;