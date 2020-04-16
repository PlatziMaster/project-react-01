import React from 'react';
import Card from './Card';

const templateItem = [{ jobTitle: 1 }, { jobTitle: 2 }, { jobTitle: 3 }]

const Experience = ({ title, items = templateItem }) => {
  return (
    <section className='Experience'>
      <h2 className='Experience-title'>{title}</h2>
      <div className='Experience-items'>
        {
          items.map((item) => (
            <div className='Experience-item' key={item.jobTitle}>
              <Card
                title={item.jobTitle}
                subtitle={item.company}
                dateStart={item.startDate}
                dateEnd={item.endDate}
                description={item.jobDescription}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Experience;