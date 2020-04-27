import React, { useContext } from 'react';
import '../styles/components/Profile.styl';
import ThemeContext from '../context/ThemeContext';

const Profile = ({ title, description }) => {
  const { dark, toggle } = useContext(ThemeContext);

  return (
    <>
      <div className={dark ? 'profile' : 'dark-mode-profile'}>
        <div className="profile-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Profile;
