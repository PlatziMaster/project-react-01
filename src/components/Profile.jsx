import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ profile }) => {
  console.log(profile);
  return (
    <div className='Profile section2'>
      <h1 className='Profile-title'>Profile</h1>
      <h2 className='Profile-desc'>{profile}</h2>
    </div>
  );
};

export default Profile;
