import React from 'react';
import Progress from './Progress'

const templateItem = [{ name: 1 }, { name: 2 }, { name: 3 }]

const Languages = ({ title, items = templateItem }) => {
  return(
    <section className='Languages'>
      <h2 className='Languages-title'>{title}</h2>
      <div className='Languages-items'>
        {
          items.map((item) => (
            <div className='Languages-item' key={item.name}>
            <Progress
                title={item.name}
                porcent={item.percentage}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}


export default Languages;