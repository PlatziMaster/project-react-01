import React from 'react';

const templateItem = [{ degree: 1 }, { degree: 2 }, { degree: 3 }]

const Academic = ({ title, items = templateItem }) => {
  return(
    <section className='Academic'>
      <h3 className='Academic-title'>{title}</h3>
      <div className='Academic-items'>
        {
          items.map((item) => (
            <div className='Academic-item' key={item.degree}>
              <h3 className='Academic-item-title'>{item.degree}</h3>
              <h4 className='Academic-item-institution'>{item.institution}</h4>
              <div className='Academic-item-date'>
                <p>{item.endDate}</p>
                <p>{item.startDate}</p>
              </div>
              <p className='Academic-item-description'>{item.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Academic;