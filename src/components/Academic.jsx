import React from 'react';
import Card from './Card';

const templateItem = [{ degree: 1 }, { degree: 2 }, { degree: 3 }]

const Academic = ({ title, items = templateItem }) => {
  return(
    <section className='Academic'>
      <h2 className='Academic-title'>{title}</h2>
      <div className='Academic-items'>
        {
          items.map((item) => (
            <div className='Academic-item' key={item.degree}>
              <Card
                key={item.degree}
                title={item.degree}
                subtitle={item.institution}
                dateStart = {item.startDate} 
                dateEnd ={item.endDate}
                description={item.description} 
                />
              </div>
          ))
        }
      </div>
    </section>
  )
}

export default Academic;