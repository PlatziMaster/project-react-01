import React from 'react';
import '../styles/components/Header.styl';
import SocialItem from './SocialItem';

const Header = (props) => {
  let i=0;
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
            {props.phone}
          </div>
          <div className='Header-email'>
            {props.email}
          </div>
          <div className='Header-website'>
            <a href={props.website}>{props.website} </a>
          </div>
        </div>
        <div className='Header-address'>
          {props.address} 
        </div>
        <div className='Header-container-social'>
          {props.social ?
            (Object.keys(props.social).map(item => <SocialItem key={i++} {...props.social[item]} />)) :
            (<div className='Header-social'> Ninguno </div>) }
        </div>
      </div>
    </div>
  );
};

export default Header;

