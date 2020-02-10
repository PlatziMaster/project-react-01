import React from 'react';

import './index.styl';

const ProfileLayout = ({ loading, profile }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Profile'>
      <div className={`Profile-title ${className}`}>Profile Summary</div>
      <div className={`Profile-desc ${className}`}>{profile}</div>
    </div>
  );
};

export default ProfileLayout;
