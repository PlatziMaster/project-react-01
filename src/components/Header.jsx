import React from 'react';

const Header = ({name,profession, address, email, website, phone, avatar, children}) => {
  return (
    <div className='Header'>
      <div className='Header-content'>
        <img className='content-img' src={avatar} alt={name}/>
        <div className='content-detail'>
          <div className='deatail-right'>
            <h1 className='Header-title'> { name }</h1>
            { children }
          </div>
          <div className='deatail-left'>
            <ul>
              <li className='detail--item'>{profession}</li>
              <li className='detail--item'>{address}</li>
              <li className='detail--item'>{email}</li>
              <li className='detail--item'>{website}</li>
              <li className='detail--item'>{phone}</li>
            </ul>
          </div>
        </div>
      </div>      
    </div>

  );
};

export default Header;
