import React from 'react';

import './index.styl';

const ErrorMessage = ({ error }) => (error ? (
  <div className='ErrorMessage ErrorMessage-warning'>
    Error:
    {' '}
    {error.message}
  </div>
) : null);

export default ErrorMessage;
