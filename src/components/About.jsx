import React from 'react';
import styled, { withTheme } from 'styled-components';

import { textColor } from '../utils/theme';

const About = ({ phone, email, website, address, section }) => {
  const A = styled.a`
    color:${textColor};
  `;
  return (
    <div className='About-color'>
      <h3 className='About-title'>
        {section}
      </h3>
      <div className='About-item-container'>
        <div>
          <A href={`tel:${phone}`} className='About-item Header-phone'>
            {phone}
          </A>
          <A href={`mailto:${email}`} className='About-item Header-email'>
            {email}
          </A>
        </div>

        <div>
          <A href={website} className='About-color About-item Header-website'>
            {website}
          </A>
        </div>

        <div>
          <A href={`http://maps.google.com/?q=${address}`} className='About-item Header-address'>
            {address}
          </A>
        </div>

      </div>
    </div>
  );
};

export default withTheme(About);
