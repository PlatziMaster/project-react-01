import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (props) => {
  const { data: { Profile } } = props;
  return (
    <div className='Profile section2'>
      <h1 className='Profile title'>Profile</h1>
      <h2>{Profile}</h2>
    </div>
  );
};

export default Profile;
