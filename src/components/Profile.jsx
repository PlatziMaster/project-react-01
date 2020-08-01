import React from 'react';

const Profile = ({ desc }) => {
  return (
    <section>
      <div className="container">
        <div className="Profile">
          <h2 className="Profile-title">About Me</h2>
          <span className="horizontal-line"></span>
          <p className="Profile-desc">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
