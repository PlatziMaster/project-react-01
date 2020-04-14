import React from 'react';

const templateItem = [{ name: 1 }, { name: 2 }, { name: 3 }]

const Skills = ({ title, items = templateItem }) => {
  return(
    <section className='Skills'>
      <h2 className='Skills-title'>{title}</h2>
      <div className='Skills-items'>
        {
          items.map((item) => (
            <div className='Skills-item' key={item.name}>
              <h3 className='Skills-item-title'>{item.name}</h3>
              <h4 className='Skills-item-percentage'>{item.percentage}</h4>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills;