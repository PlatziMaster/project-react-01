import React from 'react';
import { useTranslation } from 'react-i18next';

const Languages = ({ languages, theme }) => {
  const { t, i18n } = useTranslation('common');
  const profileLangs =
    languages || Array(3).fill({ name: 'test', percentage: '100%' });

  const languagesList = profileLangs.map((language, index) => (
    <li key={`${language.name}-${index}`} className="Languages-item">
      {language.name}: <span>{language.percentage}</span>
    </li>
  ));

  return (
    <section>
      <div className="container">
        <div className="Languages">
          <h2 className="Languages-title">{t('language.title')}</h2>
          <span className={`horizontal-line line-${theme}`}></span>
          <ul>{languagesList}</ul>
        </div>
      </div>
    </section>
  );
};

export default Languages;
