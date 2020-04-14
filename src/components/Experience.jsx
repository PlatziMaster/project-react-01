import React from 'react';

const templateItem = [{ jobTitle: 1 }, { jobTitle: 2 }, { jobTitle: 3 }]

const Experience = ({ title, items = templateItem }) => {
  return (
    <section className='Experience'>
      <h3 className='Experience-title'>{title}</h3>
      <div className='Experience-items'>
        {
          items.map((item) => (
            <div className='Experience-item' key={item.jobTitle}>
              <h3 className='Experience-item-title'>{item.jobTitle}</h3>
              <h4 className='Experience-item-company'>{item.company}</h4>
              <div className='Experience-item-date'>
                <p>{item.endDate}</p>
                <p>{item.startDate}</p>
              </div>
              <p className='Experience-item-description'>{item.jobDescription}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Experience;