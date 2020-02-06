import React from 'react';

const Info = () => (
  <div className='col-lg-6'>
    <div className='welcome_text'>
      <h4>Acerca de mi</h4>
      <p>
        Soy una persona apacionada que siempre le gusta aprender y
        actualizarce en las nuevas tecnologías,lo que más me gusta de
        programar es que puedo construir algo ,puedo materializar mis
        ideas y las de mis clientes. Amo jugar basketball y pasar tiempo
        con mi familia.
      </p>
      <div className='row'>
        <div className='col-md-4'>
          <div className='wel_item'>
            <i className='lnr lnr-book' />
            <h4>18</h4>
            <p>Poryectos</p>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='wel_item'>
            <i className='lnr lnr-users' />
            <h4>15</h4>
            <p>Clientes</p>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Info;
