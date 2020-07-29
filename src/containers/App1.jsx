import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import styled from '@emotion/styled';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';
import '../styles/components/App.styl';

const Wrapper = styled('div')`
  background: ${props => props.theme.background};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  color: ${props => props.theme.body};
  h1 {
    color: ${props => props.theme.title};
  }
  h3 {
    color: ${props => props.theme.title};
  }
  .Container__content {
    background: ${props => props.theme.background2}
  }
  .About__content{
    background: ${props => props.theme.header}
  }
  .card{
    background: ${props => props.theme.card}
  }
`;

const AppEs = () => {
  const API = 'http://localhost:3000/data';
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(API)
      .then(data => setData(data));
  }, []);
  return data.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Wrapper>
        <div className='container-fluid'>
          <div className='row'>
            <Header>
              <About About={data.es.About} social={data.es.social} />
            </Header>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-6 col-sm-12 mt-4 p-0 pl-3'>
              <div className='col Container__content rounded-lg shadow p-4 mb-lg-4'>
                <Skills skills={data.es.skills} />
              </div>
              <div className='col Container__content rounded-lg shadow p-4 mb-lg-4'>
                <Interest interest={data.es.interest} />
              </div>
              <div className='col Container__content rounded-lg shadow p-4 mb-lg-4'>
                <Languages Languages={data.es.languages} />
              </div>
            </div>
            <div className='col-md-5 ml-lg-5 col-sm-12 mt-4 p-0 pr-3'>
              <Accordion defaultActiveKey='0'>
                <Card>
                  <Profile About={data.es.About} />
                </Card>
                <Card>
                  <Experience experience={data.es.experience} />
                </Card>
                <Card>
                  <Academic academic={data.es.Academic} />
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default AppEs;
