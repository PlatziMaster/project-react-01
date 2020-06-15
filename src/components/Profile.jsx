import React from 'react';

const Profile = ({ profile }) => (
  <section className='Profile'>
    <h1 className='Profile-title'>perfil</h1>
    <p className='Profile-desc'>{profile}</p>
  </section>
);

export default Profile;
