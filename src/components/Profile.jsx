import React from 'react';

const Profile = ({ desc }) => {
  return (
    <section className="Profile">
      <h2 className="Profile-title">Profile</h2>
      <p className="Profile-desc">{desc}</p>
    </section>
  );
};

export default Profile;
