import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ info }) => {
  return (
    <div className='Profile-container'>
      <h1 className='Profile-title'>Profile</h1>
      <p className='Profile-desc'>{info}</p>
    </div>
  );
};

export default Profile;
