import React from 'react';

const Header = ({ name, avatar, children }) => {
  return (
    <header>
      <div className="container">
        <div className="Header">
          <div className="Header-img">
            <img src={avatar} alt={name} />
          </div>
          <div className="Header-details">
            <h1 className="Header-title">{name}</h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
