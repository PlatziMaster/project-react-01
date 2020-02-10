import React from 'react';
import CardAcademic from './CardAcademic';
import '../styles/components/Academic.styl';

const Academic = ({ academic }) => {
  const renderItems = () => {
    if (academic.length === 0) return <div>No hay academias</div>;
    return academic.map((acd, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className='Academic-item' key={idx}>
        <CardAcademic
          title={acd.degree}
          startDate={acd.startDate}
          endDate={acd.endDate}
          institution={acd.institution}
          description={acd.description}
        />
      </div>
    ));
  };

  return (
    <div className='Academic'>
      <div className='Academic-container container'>
        <h2 className='Academic-title'>Estudios Academicos</h2>
        { renderItems() }
      </div>
    </div>
  );
};

export default Academic;
