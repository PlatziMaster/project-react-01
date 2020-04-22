import React from 'react';
import '../styles/components/Profile.styl';

const Profile = ({ name }) => {
  return (
    <>
      <div className="profile">
        <h1>{name}</h1>
        <p>{name}</p>
      </div>
    </>
  );
};

export default Profile;
