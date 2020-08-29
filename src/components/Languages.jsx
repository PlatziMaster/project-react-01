import React from 'react';
import '../styles/components/Languages.styl';

const Languages = ({ languages = [{}, {}, {}] }) => {
  return (
    <section className='Languages'>
      <h2 className="Languages-title">Languages</h2>
      <div className='Language'>
        {
          languages.map((item, index) => <section className='Languages-item' key={index}>
            <h3 className='item'>{item.name}</h3>
            <p className='item'>{item.percentage}</p>
          </section>)}
      </div>
    </section>
  )
}

export default Languages
