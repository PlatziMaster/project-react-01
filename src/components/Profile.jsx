import React from 'react';
import '../styles/components/Profile.styl';

const Profile = (props) => {

  return (
    <div className="Profile">
      <div className="Profile-title">
        About me
      </div>
      <div className="Profile-desc">
        {props.Profile}
      </div>
    </div>
  );
};

export default Profile;