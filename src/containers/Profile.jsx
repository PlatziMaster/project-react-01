import React from 'react';
import { Row, Container } from 'reactstrap';
import Info from '../components/Info';
import Skill from '../components/Skill';
import Academic from '../components/Academic';
import Language from '../components/Language';
import Experience from '../components/Experience';

const Profile = () => (
  <>
    <section className='welcome_area p_120'>
      <div className='container'>
        <div className='row welcome_inner'>
          <Info />

          <div className='col-lg-6'>
            <div className='tools_expert'>
              <div className='skill_main'>
                <Skill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Container>
      <Row>
        <Academic />
        <Language />
      </Row>
      <Row>
        <Experience />
      </Row>
    </Container>
  </>
);

export default Profile;
