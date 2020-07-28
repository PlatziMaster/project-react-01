import React, { useEffect, useState } from 'react';
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
    <div className='container-fluid'>
      <div className='row'>
        <Header>
          <About About={data.en.About} />
        </Header>
      </div>
      <div className='row'>
        <div className='col p-0 mt-4'>
          <Profile About={data.en.About} />
        </div>
      </div>
      <div className='row'>
        <div className='col p-0 mt-4'>
          <div className='col Container__content rounded-lg shadow p-4'>
            <Experience experience={data.en.experience} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-sm-12 mt-4 p-0 pr-3'>
          <div className='col Container__content rounded-lg shadow p-4'>
            <Academic academic={data.en.Academic} />
          </div>
        </div>
        <div className='col-md-6 col-sm-12 mt-4 p-0 pl-3'>
          <div className='col Container__content rounded-lg shadow p-4'>
            <Skills skills={data.en.skills} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 col-sm-12 mt-4 p-0 pr-3'>
          <div className='col Container__content rounded-lg shadow p-4'>
            <Interest interest={data.en.interest} />
          </div>
        </div>
        <div className='col-md-6 col-sm-12 mt-4 p-0 pl-3'>
          <div className='col Container__content rounded-lg shadow p-4'>
            <Languages Languages={data.en.languages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppEs;
