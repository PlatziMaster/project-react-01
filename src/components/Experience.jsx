import React from 'react';
import { useTranslation } from 'react-i18next';

const Experience = ({ experience, theme }) => {

  const { t, i18n } = useTranslation('common');

  const profileExpirience =
    experience ||
    Array(3).fill({
      company: 'A company',
      endDate: 'Jan 2017',
      startDate: 'Jan 2018',
      jobDescription: 'lorem ipsum',
      jobTitle: 'title',
    });

  const experienceList = profileExpirience.map((exp, index) => (
    <div key={`${exp.company}-${index}`} className="Experience-item">
      <div className="small">
        {exp.startDate} - {exp.endDate}
      </div>
      <div className="Experience-item-head">
        <div className="Experience-item-title"><h3>{exp.jobTitle}</h3></div>
        <span className="vertical-line"></span>
        <div className="Experience-item-subtitle"><h3>{exp.company}</h3></div>
      </div>
      <p>{exp.jobDescription}</p>
    </div>
  ));

  return (
    <section>
      <div className="container">
        <div className="Experience">
          <h2 className="Experience-title">{t('experience.title')}</h2>
          <span className={`horizontal-line line-${theme}`}></span>
          <div className="Experience-items">{experienceList}</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
