import React from 'react';
import '../styles/components/CardAcademic.styl';

const CardAcademic = ({ title, startDate, endDate, institution, description }) => (
  <div className='CardAcademic'>
    <h2 className='CardAcademic__title'>
      <span className='CardAcademic__title-degree'>{title}</span>
      <span className='CardAcademic__title-date'>{`${startDate} - ${endDate}`}</span>
    </h2>
    <p className='CardAcademic__institucion'>{institution}</p>
    <p>{description}</p>
  </div>
);

export default CardAcademic;
