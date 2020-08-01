import React from 'react';

const Academic = ({ academic }) => {
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
        <span className="vertical-line"></span>
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
          <h2 className="Academic-title">Academic</h2>
          <span className="horizontal-line"></span>
          <div className="Academic-items">{academicList}</div>
        </div>
      </div>
    </section>
  );
};

export default Academic;
