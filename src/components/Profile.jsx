import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ profile }) => {
  return (
    <div className='Profile'>
      <h3 className='Profile-title'>Profile</h3>
      <p className='Profile-desc'>{profile}</p>
    </div>
  );
};

export default Profile;
