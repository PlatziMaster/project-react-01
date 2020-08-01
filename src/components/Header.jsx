import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = ({ name, avatar, children }) => {
  const [t, i18n] = useTranslation('common');

  return (
    <header>
      <div className="container">
        <div className="Header">
          <div className="Header-img">
            <img src={avatar} alt={name} />
          </div>
          <div className="Header-details">
            <div className="Header-head">
              <h1 className="Header-title">{name}</h1>
              {i18n.language === 'en' ? (
                <button className="lang-btn" onClick={() => i18n.changeLanguage('es')}>🇺🇸</button>
              ) : (
                <button className="lang-btn" onClick={() => i18n.changeLanguage('en')}>🇲🇽</button>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
