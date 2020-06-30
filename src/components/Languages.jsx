import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ name1, name2, name0, percentage1, percentage2, percentage0, }) => {
  return (
    <div className="Languages">
      <h1 className="Languages-title">Idiomas</h1>
      <p className="Languages-item">{name0} <i>{percentage0}</i></p>
      <p className="Languages-item">{name1} <i>{percentage1}</i></p>
      <p className="Languages-item">{name2} <i>{percentage2}</i></p>
    </div>
  )
}

export default Languages;