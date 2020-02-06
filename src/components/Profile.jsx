import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (props) => {

  const {
    profession,
    Profile,
  } = props;

  return (
    <section className='Profile Box'>
      <h1 className='Profile__title Subtitle'>
        {profession}
      </h1>
      <p className='Profile__description'>{Profile}</p>
    </section>
  );
};

export default Profile;
