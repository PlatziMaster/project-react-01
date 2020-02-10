import React from 'react';

export default function Header(props) {
  const { profession, Profile } = props.info;
  return (
    <div className='General__main'>
      <div className='Profile-title'>
        <h2>
          {' '}
          {profession}
          {' '}
        </h2>
        <p className='Profile-desc'>{Profile}</p>
      </div>
    </div>
  );
}
