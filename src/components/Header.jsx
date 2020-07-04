import React, { Children } from 'react';

import '../styles/components/Header.styl';

const Header = ({ children, avatar }) => (
  <header className="Header">
    <figure className="Header__image">
      <img src={avatar} alt="Andrés Valencia" />
    </figure>
    {children}
  </header>
);

export default Header;
