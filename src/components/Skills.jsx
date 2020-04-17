import React from 'react';
import Progress from './Progress'

const templateItem = [{ name: 1 }, { name: 2 }, { name: 3 }]

const Skills = ({ title, items = templateItem }) => {
  return (
    <section className='Skills'>
      <h2 className='Skills-title'>{title}</h2>
      <div className='Skills-items'>
        {
          items.map((item) => (
            <div className='Skills-item' key={item.name}>
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

export default Skills;