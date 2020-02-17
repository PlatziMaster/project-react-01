import React from 'react';
import '../styles/components/Profile.css';

const Profile = ({ Profile }) => (
  <div className='Profile'>
    <h2 className='Profile-title'>Profile</h2>
    <p className='Profile-desc'>
      {Profile}
    </p>
  </div>
);

export default Profile;
