import React from 'react';
import '../styles/components/Social.styl';

const Social = props => {
  return (
    <div>
      <h2 className="Academic-title">Social Media</h2>
      <div className="social">
        {props.social.map(s => (
          <div className="social__box">
            <a className="social__link" href={s.url}>
              {s.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Social;
