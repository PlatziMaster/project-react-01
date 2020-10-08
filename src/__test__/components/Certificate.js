import React from 'react';
import '../../styles/components/Certificate.css';

const Certificate = ({ certificate = [{}, {}, {}] }) => {
  return (
    <div className='Certificate__container'>
      <h2 className='Certificate__title'>Certificate</h2>
      <img className='imagen' src='../../images/inspiracion.svg' alt='50px' width='50px' />
      <div className='Certificate__text'>
        {certificate.map((element, index) => (
          <section className='Certificate-item' key={element.institution}>
            <div className='item__container'>
              <h3 className='item'>{element.date}</h3>
              <img className='imagen__1' src='../../images/certificado.svg' alt='20px' width='20px' />
            </div>
            <p className='item'>{element.description}</p>
            <p className='item'>{element.institution}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
