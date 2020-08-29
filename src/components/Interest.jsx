import React from 'react';
import '../styles/components/Interest.styl';

const Interest = ({ interest = ['','','','',''] }) => {
  return (
    <section className='Interest'>
      <h2 className="Interest-title">Intereses</h2>
      <section className='Interests'>
        { interest.map((item, index) => (<p className='Interest-item' key={index} >{item}</p>))

        }
      </section>
    </section>
  )
}

export default Interest
