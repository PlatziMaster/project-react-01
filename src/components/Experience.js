import React from 'react';
import '../styles/components/Experience.styl';

class Experience extends React.Component {
  render() {
    const { experience } = this.props;
    return (
      <div className='Experience'>
        <h1 className='Experience-title'>Experiencia profesional</h1>
        <div className='Experience-items-container'>
          {
            experience && experience.map(
              (item, index) => {
                return (
                  <div className='Experience-item' key={item.company}>
                    <h2 className='Experience-item-company'>{item.company}</h2>
                    <h3 className='Experience-item-work'>{item.jobTitle}</h3>
                    <h4 className='Experience-item-time'>{`${item.startDate} - ${item.endDate}`}</h4>
                    <p>{item.jobDescription}</p>
                  </div>
                );
              },
            )
          }
        </div>
      </div>
    );
  }
}

export default Experience;
