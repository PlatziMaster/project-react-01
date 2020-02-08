import React from 'react';
import { useSelector } from 'react-redux';

const Info = () => {

  const about = useSelector(state => state.user.about);
  const clients = useSelector(state => state.user.clients);
  const projects = useSelector(state => state.user.projects);

  return (
    <div className='col-lg-6'>
      <div className='welcome_text'>
        <h4>About me </h4>
        <p>
          {about}
        </p>
        <div className='row'>
          <div className='col-md-4'>
            <div className='wel_item'>
              <i className='lnr lnr-book' />
              <h4>{projects}</h4>
              <p>Projects</p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='wel_item'>
              <i className='lnr lnr-users' />
              <h4>
                {clients}
              </h4>
              <p>Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Info;
