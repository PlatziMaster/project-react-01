import React from 'react';

const Card = ({ title, subtitle, dateStart, dateEnd, description }) => {
  return (
    <section className='Card'>
        <h3 className='Card-title'>{title}</h3>
        <h4 className='Card-subtitle'>{subtitle}</h4>
        <div className='Card-date Card-start'>
          <p className='Card-date-title'>Start</p>
          <p className='Card-date-date'>{dateStart}</p>
        </div>
        <div className='Card-date Card-end'>
          <p className='Card-date-title'>End</p>
          <p className='Card-date-date'>{dateEnd}</p>
        </div>
        <p className='Card-description'>{description}</p>
    </section>
  )
}

export default Card;