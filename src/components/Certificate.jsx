import React from 'react';

import '../styles/components/Certificate.styl';

const Certificate = ({ certificate = [] }) => {
  return (
    <section className="Certificate">
      <h2 className="Certificate-title">Certificate</h2>
      {certificate.map(cert => (
        <div key={cert.name} className="Certificate-item">
          <h3>{cert.name}</h3>
          <p>{cert.description}</p>
          <p>{cert.institution}</p>
          <span>{cert.date}</span>
        </div>
      ))}
    </section>
  );
};

export default Certificate;
