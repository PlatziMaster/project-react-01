import React from 'react';
import '../styles/components/App.styl';

function Header() {
  return (
    <div className='Header-title'>
      <div className='item1a'><img id='imagen' src='../public/img/paspi4.png' alt='' /></div>
      <div className='item2a'>Andres Alba</div>
      <div className='item3a'>Programmer</div>
      <div className='item4a'>Phone: 3204897945</div>
      <div className='item5a'>Email: tensinkusum@hotmail.com</div>
      <div className='item6a'>Site: botnator.com</div>
      <div className='item7a'>Direccion cll 00 00-00</div>
    </div>
  );
}

export default Header;
