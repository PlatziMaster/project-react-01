import React from 'react';

const templateItem = [1, 2, 3]

const Interest = ({ title, items = templateItem }) => {
  return(
    <section className='Interest'>
      <h3 className='Interest-title'>{title}</h3>
      <div className='Interest-items'>
        {
          items.map((item) => (
            <div className='Interest-item' key={item}>
              <h3 className='Interest-item-title'>{item}</h3>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Interest;