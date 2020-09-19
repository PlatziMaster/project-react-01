import React from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ academic = [{}, {}, {}] }) => {
  const data = academic;
  return (
    <section className="Academic">
      <h2 className="Academic-title">Academic</h2>
      <div className="Academics">
        {data &&
          data.map((item, index) => (
            <section className="Academic-item" key={index}>
              <h3 className="item">{item.degree}</h3>
              <p className="item">{item.institution}</p>
              <p className="item">{item.description}</p>
            </section>
          ))}
      </div>
    </section>
  );
};

export default Academic;
