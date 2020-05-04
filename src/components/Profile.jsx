import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ Profile }) => {
  return (
    <div className='Profile section2'>
      <h1 className='Profile-title'>Profile</h1>
      <h2 className='Profile-desc'>{Profile}</h2>
    </div>
  );
};

export default Profile;
