import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (props) => {

  const {
    profession,
    profile,
  } = props;

  return (
    <section className='Profile Box'>
      <h1 className='Profile-title Subtitle'>
        Profile
      </h1>
      <p className='Profile-desc'>{profile}</p>
    </section>
  );
};

export default Profile;
