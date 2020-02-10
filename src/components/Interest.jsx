import React from 'react';

export default function Interest(props) {
  let arry = Object.values(props);

  return (
    <div className="General__main">
      <div>
        <h2 className="Interest-title">Intereses</h2>
        <p className="Interest-item">
          {arry[0]} <span>{arry[1]}</span>
        </p>
        <p className="Interest-item">{arry[2]}</p>
      </div>
    </div>
  );
}
