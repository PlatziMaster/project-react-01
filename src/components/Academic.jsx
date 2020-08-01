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
    <li key={`${aca.degree}-${index}`} className="Academic-item">
      {aca.degree}/{aca.description}/{aca.endDate}/{aca.institution}/
      {aca.startDate}
    </li>
  ));

  return (
    <section className="Academic">
      <h1 className="Academic-title">Academic</h1>

      <ul>{academicList}</ul>
    </section>
  );
};

export default Academic;
