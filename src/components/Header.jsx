import React from 'react';
import Profile from '../images/profile.jpeg';
import '../styles/components/Header.styl';

const Header = (props) => {

  return (
    <div className='Header'>
      <div className='Header-picture'>
        <img src={props.avatar} alt='Usuario' />
      </div>
      <div className='Header-container'>
        <div className='Header-title'>
          {props.name}
        </div>
        <div className='Header-job-title'>
          {props.profession}
        </div>
        <div className='Header-container-data'>
          <div className='Header-phone'>
            {props.profession}
          </div>
          <div className='Header-email'>
            {props.email}
          </div>
          <div className='Header-website'>
            {props.phone}
          </div>
        </div>
        <div className='Header-address'>
          {props.address}
        </div>
      </div>
    </div>
  );
};

export default Header;

