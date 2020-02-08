import React from 'react';

import '../styles/components/Header.styl';

const Header = ({
  children,
  data = {
    name: '',
    profession: '',
    address: '',
    email: '',
    website: '',
    phone: '',
    avatar: '',
  },
}) => {
  return (
    <header className="Header">
      <img src={data.avatar} alt="Tonalli" />
      <div className="Header-content">
        <h1 className="Header-title">{data.name}</h1>
        <h3 className="Header-job-title">{data.profession}</h3>
        <div>
          <h3 className="Header-phone">{data.phone}</h3>
          <h3 className="Header-email">{data.email}</h3>
          <h3 className="Header-website">
            <a href={data.website} target="_blank" rel="noopener noreferer">
              {data.website}
            </a>
          </h3>
        </div>
        <h3 className="Header-adress">{data.address}</h3>
      </div>
      {children}
    </header>
  );
};

export default Header;
