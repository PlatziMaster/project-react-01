import React from 'react';
import '../styles/components/Header.styl';

const Header = ({ children }) => (
  <header className="headerContainer">
    <figure className="headerContainer-avatar">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/denprueba001.appspot.com/o/IMG_3606.jpeg?alt=media&token=56e2205a-5df3-4053-8310-11b65630e3b2"
        alt="avatar"
      />
    </figure>
    <h1 className="Header-title"> Dennis Velez</h1>
    {children}
  </header>
);

export default Header;
