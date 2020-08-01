import React from 'react';

const Header = ({ name, avatar, children }) => {
  return (
    <header className="Header">
      <img src={avatar} alt={name} width="50px" height="50px" />
      <div>
        <h1 className="Header-title">{name}</h1>
        {children}
      </div>
    </header>
  );
};

export default Header;
