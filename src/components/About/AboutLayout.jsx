import React from 'react';

import './index.styl';

const AboutLayout = ({
  loading,
  profession,
  phone,
  email,
  website,
  address,
}) => {
  let className = '';
  if (loading) className = 'loading-item';

  return (
    <div className='About'>
      <div className={`About-title ${className}`}>{profession}</div>
      <div className={`About-item Phone ${className}`}>
        {
          phone && (
          <>
            <span>Phone: </span>
            {' '}
            <a href={`tel:+${phone}`}>
              {phone}
            </a>
          </>
          )}
      </div>
      <div className={`About-item Email ${className}`}>
        <span>E-mail: </span>
        {' '}
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className={`About-item Website ${className}`}>
        <span>Website: </span>
        {' '}
        <a href={website} target='_blank' rel='noopener noreferrer'>
          {website}
        </a>
      </div>
      <div className={`About-item Address ${className}`}>
        <span>Residence: </span>
        {' '}
        {address}
      </div>
    </div>
  );
};

export default AboutLayout;
