import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ description }) => {
  return (
    <div className='Profile section'>
      <h2 className='Profile-title'>My Profile</h2>
      <p className='Profile-desc'>{description}</p>
    </div>
  );
};
export default Profile;
