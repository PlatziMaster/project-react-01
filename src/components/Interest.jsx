import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ interest0, interest1, interest2, interest3 }) => {
  return (
    <div className="Interest">
      <h1 className="Interest-title">Intereses</h1>
      <p className="Interest-item">{interest0}</p>
      <p className="Interest-item">{interest1}</p>
      <p className="Interest-item">{interest2}</p>
      <p className="Interest-item">{interest3}</p>
    </div>
  )
}

export default Interest;