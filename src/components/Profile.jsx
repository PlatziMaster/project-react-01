import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ Profile }) => {
  return (
    <div className='Profile'>
      <h2 className='titleLabel'>My profile</h2>
      <p className='Profile--description'>

        {Profile}
      </p>
    </div>
  );
};

export default Profile;
