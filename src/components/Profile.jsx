import React from 'react';

const Profile = ({ profile }) => (
  <div className='profile'>
    <h1 className='profile-title'>Profile</h1>
    <p className='profile-paragraph'>{profile}</p>
  </div>
);

export default Profile;
