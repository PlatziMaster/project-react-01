import React from 'react';
import Avatar from '../Avatar';

import './index.styl';

const HeaderLayout = ({ loading, name, avatar, children }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Header'>
      <div className='Header-avatar'>
        <Avatar name={name} profilePic={avatar} size='extra-large' />
      </div>
      <div>
        <div className={`Header-title ${className}`}>{name}</div>
        {children}
      </div>
    </div>
  );
};

export default HeaderLayout;
