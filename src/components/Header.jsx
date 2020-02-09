import React from 'react';
import '../styles/components/Header.styl';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/data';

const Header = ({ children }) => {
  const profile = useInitialState(API);
  return (
    <div className="Header">
      <div className="Header-title" />
      <img className="Header-avatar" alt="Cristobal Avatar" src={profile.avatar} />
      {children}
    </div>
  );
};

export default Header;