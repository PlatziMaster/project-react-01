import React from 'react';

import '../styles/components/Profile.styl';

const Profile = ({ profession, about }) => {
  return (
    <section className='Profile'>
      <h2 className='Profile-title'>{profession}</h2>
      <p className='Profile-desc'>{about}</p>
    </section>
  );
};

export default Profile;
