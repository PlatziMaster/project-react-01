import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdPictureAsPdf } from 'react-icons/md';
import { useTheme } from './ThemeContext';

const About = ({ About, social }) => {
  const aboutArray = About || Array(1).fill(1);
  const socialArray = social || Array(1).fill(1);
  const themeState = useTheme();
  return (
    <>
      {aboutArray.map(item => (
        <React.Fragment key={item.id}>
          <div className='col About__content rounded-lg shadow text-center text-md-left'>
            <div className='col'>
              <div className='row'>
                <div className='col-md-2 About__content-img col-sm-12 d-flex align-self-center justify-content-center'>
                  <img src={item.avatar} alt='imagen de Perfil' />
                </div>
                <div className='About__content-intro col-md-10 col-sm-12'>
                  <div className='row About__content-text'>
                    <div className='col-sm-8 About-title'>
                      <h1>{item.name}</h1>
                      <h5>{item.profession}</h5>
                    </div>
                    <div className='col-sm-4 About-title d-flex align-items-center justify-content-around'>
                      {socialArray.map(item => (
                        <>
                          <a href={`${item.url1}`}>
                            <FaFacebookSquare size={30} />
                          </a>
                          <a href={`${item.url2}`}>
                            <FaTwitterSquare size={30} />
                          </a>
                          <a href={`${item.url3}`}>
                            <FaGithub size={30} />
                          </a>
                          <a href={`${item.url4}`}>
                            <FaLinkedin size={30} />
                          </a>
                          <a href={`${item.url5}`}>
                            <MdPictureAsPdf size={30} />
                          </a>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className='row About__content-text'>
                    <div className='col-md-3 col-sm-12 About-item'>
                      <h5>{item.phone}</h5>
                      <h5>{item.address}</h5>
                    </div>
                    <div className='col-md-3 col-sm-12 text-center About-item'>
                      <h5>{item.email}</h5>
                      {/* <input type='checkbox' className='checkbox' id='checkbox' />
                      <label className='switch' htmlFor='checkbox'>
                        <div className='sun'>
                          <MdWbSunny size={22} />
                        </div>
                        <div className='moon'>
                          <FaMoon size={22} />
                        </div>
                      </label> */}
                      <Button onClick={() => themeState.toggle()}>
                        {themeState.dark ? 'Light Mode' : 'Dark Mode'}
                      </Button>
                    </div>
                    <div className='col-md-3 text-center col-sm-12 About-item'>
                      <h4>
                        <a href={item.website}>Web Site</a>
                      </h4>
                      <h4>
                        <Link to='/'>
                          <Button variant='outline-primary'>Español</Button>
                        </Link>
                        {' '}
                        <Link to='/en'>
                          <Button variant='outline-success'>English</Button>
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

export default About;
