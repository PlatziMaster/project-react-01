import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const About = ({ About }) => {
  const aboutArray = About || Array(1).fill(1);
  return (
    <>
      {aboutArray.map(item => (
        <div className='col About__content rounded-lg shadow text-center text-md-left'>
          <div className='col'>
            <div className='row'>
              <div className='col-md-2 About__content-img col-sm-12 d-flex align-self-center justify-content-center'>
                <img src={item.avatar} alt='imagen de Perfil' />
              </div>
              <div className='About__content-intro col-md-10 col-sm-12'>
                <div className='row About__content-text'>
                  <div className='col-sm-12 About-title'>
                    <h1>{item.name}</h1>
                    <h5>{item.profession}</h5>
                  </div>
                </div>
                <div className='row About__content-text'>
                  <div className='col-md-3 col-sm-12 About-item'>
                    <h5>{item.phone}</h5>
                    <h5>{item.address}</h5>
                  </div>
                  <div className='col-md-3 col-sm-12 About-item'>
                    <h5>{item.email}</h5>
                  </div>
                  <div className='col-md-3 text-center col-sm-12 About-item'>
                    <h4>
                      <a href={item.website}>Web Site</a>
                    </h4>
                    <h4>
                      <BrowserRouter>
                        <Link to='/'>
                          <Button variant='outline-primary'>Español</Button>
                        </Link>
                        {' '}
                        <Link to='/en'>
                          <Button variant='outline-success'>English</Button>
                        </Link>
                      </BrowserRouter>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default About;
