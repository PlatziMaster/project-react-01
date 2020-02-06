import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (props) => {

  const {
    profession = 'Developer',
    Profile = 'Ignore the squirrels, you\'ll never catch them anyway hack, for floof tum, tickle bum, jellybean footies curly toes climb leg roll over and sun my belly',
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
