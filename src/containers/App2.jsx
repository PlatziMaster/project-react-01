import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
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
      <div className='container-fluid'>
        <div className='row'>
          <Header>
            <About About={data.en.About} />
          </Header>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-6 col-sm-12 mt-4 p-0 pl-3'>
            <div className='col Container__content rounded-lg shadow p-4 mb-lg-4'>
              <Skills skills={data.en.skills} />
            </div>
            <div className='col Container__content rounded-lg shadow p-4 mb-lg-4'>
              <Interest interest={data.en.interest} />
            </div>
            <div className='col Container__content rounded-lg shadow p-4 mb-lg-4'>
              <Languages Languages={data.en.languages} />
            </div>
          </div>
          <div className='col-md-5 ml-lg-5 col-sm-12 mt-4 p-0 pr-3'>
            <Accordion defaultActiveKey='0'>
              <Card>
                <Profile About={data.en.About} />
              </Card>
              <Card>
                <Experience experience={data.en.experience} />
              </Card>
              <Card>
                <Academic academic={data.en.Academic} />
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppEs;
