import React from 'react';

const Profile = ({ desc }) => {
  return (
    <section>
      <div className="container">
        <div className="Profile">
          <h2 className="Profile-title">Profile</h2>
          <p className="Profile-desc">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
