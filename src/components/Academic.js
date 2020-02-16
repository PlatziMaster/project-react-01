import React from 'react';
import '../styles/components/Academic.styl';

class Academic extends React.Component {
  render() {
    const { academic } = this.props;
    return (
      <div className='Academic'>
        <h1 className='Academic-title'>Formacion educativa</h1>
        <div className='Academic-items-container'>
          {
            academic && academic.map(
              (item) => {
                return (
                  <div className='Academic-item' key={item.degree}>
                    <h2>{item.degree}</h2>
                    <h4>{item.institution}</h4>
                    <span>{`${item.startDate} - ${item.endDate}`}</span>
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

export default Academic;
