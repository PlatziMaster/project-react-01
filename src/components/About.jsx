import React from 'react';
import { Col, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const About = () => {
  const user = useSelector(state => state.user);

  return (
    <>
      {user ? (
        <section className='home_banner_area'>
          <div className='container box_1620'>
            <Row className='banner_inner d-flex align-items-center'>
              <Col className='text-center mb-5' lg={6} xs={12}>
                <img src={user.avatar} alt='' />
              </Col>
              <Col lg={6} xs={12}>
                <div className='personal_text'>
                  <h6>Hola, soy</h6>
                  <h3>{user.name}</h3>
                  <h4>{user.profession}</h4>
                  <p>{user.Profile}</p>
                  <ul className='list basic_info'>
                    <li>
                      <a href='#'>
                        <i className='lnr lnr-phone-handset' />
                        {user.phone}
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='lnr lnr-envelope' />
                        <span
                          className='__cf_email__'
                          data-cfemail='791b0c0a10171c0a0a09151817391d161718151d'
                        >
                          {user.email}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='lnr lnr-home' />
                        {user.address}
                      </a>
                    </li>
                  </ul>

                  <ul className='list personal_social'>
                    {_.map(user.social, social => (
                      <li>
                        <a href={social.url}>
                          {social.name}
                          <i className='fa fa-facebook' />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      ) : (
        <p>Hola</p>
      )}
    </>
  );
};

export default About;
