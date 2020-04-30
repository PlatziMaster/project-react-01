import React from 'react';
import '../styles/components/profile.styl';

const Profile = (props) => {
  const { data: { title, description } } = props;
  return (
    <div className='Profile'>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default Profile;
