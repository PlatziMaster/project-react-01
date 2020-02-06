import React from 'react';
import { Col, Row } from 'reactstrap';

const About = () => (
  <section className='home_banner_area'>
    <div className='container box_1620'>
      <Row className='banner_inner d-flex align-items-center'>
        <Col className='text-center mb-5' lg={6} xs={12}>
          <img src='src\img\yo.jpg' alt='' />
        </Col>
        <Col lg={6} xs={12}>
          <div className='personal_text'>
            <h6>Hola, soy</h6>
            <h3>Javier Fuentes Mora</h3>
            <h4>Fullstack WEB Developer</h4>
            <p>Aquí conocerás un poco más sobre mi y sobre mis trabajos</p>
            <ul className='list basic_info'>
              <li>
                <a href='#'>
                  <i className='lnr lnr-phone-handset' />
                  5515559665
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='lnr lnr-envelope' />
                  <span
                    className='__cf_email__'
                    data-cfemail='791b0c0a10171c0a0a09151817391d161718151d'
                  >
                    javier.fuentesm@hotmail.com
                  </span>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='lnr lnr-home' />
                  CDMX
                </a>
              </li>
            </ul>
            <ul className='list personal_social'>
              <li>
                <a href='https://www.facebook.com/javierfuentesmora94'>
                  <i className='fa fa-facebook' />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/javier_mora94'>
                  <i className='fa fa-twitter' />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/in/javier-fuentes-mora-7a0b86a7/'>
                  <i className='fa fa-linkedin' />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>

    </div>
  </section>
);

export default About;
