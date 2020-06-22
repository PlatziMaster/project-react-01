import React, { Children } from 'react';
import '../styles/components/Academic.styl';

const Academic = ({ children }) => (
  <div className="Academic">
    <h2 className="Academic-title">Academic</h2>
    {children}
    <span className="Academic-item"></span>
    <span className="Academic-item"></span>
    <span className="Academic-item"></span>
  </div>
);

export default Academic;
