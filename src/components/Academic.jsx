import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ academy1, academy2, academy3 }) => {
  return (
    <div className="Academic">
      <h1 className="Academic-title">Titulos Academicos</h1>
      <p className="Academic-item">{academy1}</p>
      <p className="Academic-item">{academy2}</p>
      <p className="Academic-item">{academy3}</p>
    </div>
  )
}

export default Academic;