import React from 'react';

const Profile = () => {
  const profileDesc = 'El discurso divertido para conseguir trabajo. Dame trabajo YA!';

  return (
    <section>
      <h1 className='Profile-title'>Perfil</h1>
      <p className='Profile-desc'>{profileDesc}</p>
    </section>
  );
};

export default Profile;
