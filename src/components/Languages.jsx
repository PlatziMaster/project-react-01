import React from 'react';
import '../styles/components/Languages.styl';

const Languages = data => (
  <div className="Languages">
    <h2 className="Languages-title">Languages</h2>
    <ul>
      {data.languages?.map(item => (
        <li className="Languages-item" key={item.name}>
          {`${item.name} ${item.percentage}`}
        </li>
      ))}
    </ul>
    <span className="Languages-item"></span>
    <span className="Languages-item"></span>
    <span className="Languages-item"></span>
  </div>
);

export default Languages;
