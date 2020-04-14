import React from 'react';

const templateItem = [{ name: 1 }, { name: 2 }, { name: 3 }]

const Languages = ({ title, items = templateItem }) => {
  return(
    <section className='Languages'>
      <h2 className='Languages-title'>{title}</h2>
      <div className='Languages-items'>
        {
          items.map((item) => (
            <div className='Languages-item' key={item.name}>
              <h3 className='Languages-item-title'>{item.name}</h3>
              <h4 className='Languages-item-percentage'>{item.percentage}</h4>
            </div>
          ))
        }
      </div>
    </section>
  )
}


export default Languages;