import React from 'react';

const Profile = ({ profile }) => {
  return (
    <section>
      <h1 className='Profile-title'>Perfil</h1>
      <p className='Profile-desc'>{profile}</p>
    </section>
  );
};

export default Profile;
