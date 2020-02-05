import React from 'react';
import '../styles/components/About.styl';

const About = ({ name, phone, email, profession, address, website }) => {
  return (
    <div className='About'>
      <h1 className='Header-title'>
        {name}
      </h1>
      <div className='Header-job-title titleLabel '>{profession}</div>

      <div className='Header-phone'>
        <p>Phone</p>
        <p>

          {phone}
        </p>
      </div>
      <div className='Header-email'>
        <p>Email</p>
        <p>

          {email}
        </p>
      </div>
      <div className='Header-website'>
        <p>Website</p>
        <a href='/'>
          <p>

            {website}
          </p>
        </a>
      </div>
      <div className='Header-adress'>
        <p>Adress</p>
        <p>
          {address}
        </p>
      </div>
    </div>
  );
};

export default About;
