import React from 'react';

import '../styles/components/Profile.styl';

const Profile = ({ description }) => {
  return (
    <section className="Profile">
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">{description}</p>
    </section>
  );
};

export default Profile;
