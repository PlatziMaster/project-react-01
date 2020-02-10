import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ profile }) => (
  <div className='Profile'>
    <div className='Profile-container container'>
      <h1 className='Profile-title'>Perfil</h1>
      <p className='Profile-desc'>{profile}</p>
    </div>
  </div>
);

export default Profile;
