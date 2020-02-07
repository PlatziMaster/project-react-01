import React, { Fragment } from 'react';

export default function About(info) {
  const { name, profession, phone, email, website, address } = info.info.info;
  return (
    <Fragment>
      <header>
        <div className='Header__main'>
          <img src='../../src/assets/static/logo.png' alt='Logo' />
        </div>
        <div className='About-title'>
          <h2>{name}</h2>
          <p className='About-item'>{profession}</p>
          <p className='About-item'>
            {phone}
            {' '}
            {email}
            {' '}
            {website}
            {' '}
          </p>
          <p className='About-item'>{address}</p>
        </div>
      </header>
    </Fragment>
  );
}
