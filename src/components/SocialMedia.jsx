import React from 'react';

const SocialMedia = ({ name, url }) => {
  return (
    <div className='SocialMedia'>
      <div>
        {name}
      </div>
      <div>
        <a href={url}>{name}</a>
      </div>
    </div>
  );
};

export default SocialMedia;
