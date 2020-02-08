import React from 'react';

const ProfileLayout = ({ loading, title, profile }) => {
  let className = '';
  if (loading) className = 'loading-item';
  return (
    <div className='Profile'>
      <div className={`Profile-title ${className}`}>{title}</div>
      <div className={`Profile-desc ${className}`}>{profile}</div>
    </div>
  );
};

export default ProfileLayout;
