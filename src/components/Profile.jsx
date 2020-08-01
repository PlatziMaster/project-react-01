import React from 'react';
import { useTranslation } from 'react-i18next';

const Profile = ({ desc, theme }) => {
  const { t, i18n } = useTranslation('common');

  return (
    <section>
      <div className="container">
        <div className="Profile">
          <h2 className="Profile-title">
            {t('profile.title')}
          </h2>
          <span className={`horizontal-line line-${theme}`}></span>
          <p className="Profile-desc">{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
