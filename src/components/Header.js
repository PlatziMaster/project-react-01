import React from 'react';
import '../styles/components/Header.styl';

class Header extends React.Component {
  render() {
    const { name, profession, address, phone, website, email, avatar } = this.props;
    return (
      <div className='Header'>
        <img className='Header-photo' src={avatar} alt='Jose Diaz' />
        <div className='Header-information'>
          <h1 className='Header-title'>{name}</h1>
          <span className='Header-job-title'>{profession}</span>
          <div className='Header-contact'>
            <span className='Header-phone'>{phone}</span>
            <span className='Header-email'>{email}</span>
            <span className='Header-website'>{website}</span>
          </div>
          <span className='Header-adress'>{address}</span>
        </div>
      </div>
    );
  }
}

export default Header;
