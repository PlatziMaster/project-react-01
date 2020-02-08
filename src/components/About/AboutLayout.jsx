import React from 'react';

import './index.styl';

const AboutLayout = ({ loading, profession, phone, email, website, address }) => {
  let className = '';
  if (loading) className = 'loading-item';

  return (
    <div className='About'>
      <div className={`About-title ${className}`}>{profession}</div>
      <div className={`About-item Phone ${className}`}>{phone}</div>
      <div className={`About-item Email ${className}`}>{email}</div>
      <div className={`About-item Website ${className}`}>{website}</div>
      <div className={`About-item Address ${className}`}>{address}</div>
    </div>
  );
};

export default AboutLayout;
