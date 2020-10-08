import React from 'react';
import '../../styles/components/Academic.css';

class Academic extends React.Component {
  render() {
    return (
      <div className='Academic__container'>
        <h2 className='Academic__title'>Academic</h2>
        <img className='imagen' src='../../images/beca.svg' alt='50px' width='50px' />
        <div className='Academic__text'>
          <p className='Academic__item'>Industrial Engineer</p>
          <p className='Academic__item'>Frontend Developer</p>
          <h3 className='Academic__item'>ADDITIONAL COURSES</h3>
          <p className='Academic__item'>Diploma: Science, technology and innovation.</p>
          <p className='Academic__item'>Diploma in Talent Management Human.</p>
          <p className='Academic__item'>Microsoft Project Course:Application in programming plays.</p>
          <p className='Academic__item'>Logistics</p>
          <p className='Academic__item'>Fundamentals course in electronics</p>
        </div>
      </div>
    );
  };
}
export default Academic;
