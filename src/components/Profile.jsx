import React from 'react';

const Profile = ({ Profile }) => {
  return (
    <div className='Profile'>
      <h1 className='Profile-title'> Profile</h1>
      <p className='Profile-desc'>{Profile}</p>
    </div>
  );
};

export default Profile;
