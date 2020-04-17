import React from 'react';

const Progress = ({ title, porcent }) => {
  return (
    <section className='Progress'>
    <h4>{title}</h4>
      <div className='Progress-graphi'>
        <div className='Progress-graphi-bg'>
          <div className='Progress-graphi-barra'>
          {porcent}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progress;