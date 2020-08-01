import React from 'react';
import { useTranslation } from 'react-i18next';

const Academic = ({ academic, theme }) => {
  const { t, i18n } = useTranslation('common');

  const profileAcademic =
    academic ||
    Array(3).fill({
      degree: 'Master',
      endDate: 'Jan 2017',
      startDate: 'Jan 2018',
      description: 'lorem ipsum',
      institution: 'IMT',
    });

  const academicList = profileAcademic.map((aca, index) => (
    <div key={`${aca.degree}-${index}`} className="Academic-item">
      <div className="small">
        {aca.startDate} - {aca.endDate}
      </div>
      <div className="Academic-item-head">
        <div className="Academic-item-title">
          <h3>{aca.degree}</h3>
        </div>
        <span className={`vertical-line line-${theme}`}></span>
        <div className="Academic-item-subtitle">
          <h3>{aca.institution}</h3>
        </div>
      </div>
      <p>{aca.description}</p>
    </div>
  ));

  return (
    <section>
      <div className="container">
        <div className="Academic">
          <h2 className="Academic-title">{t('academic.title')}</h2>
          <span className={`horizontal-line line-${theme}`}></span>
          <div className="Academic-items">{academicList}</div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
