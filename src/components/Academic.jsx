import React, { Component } from 'react';
import '../styles/components/Academic.styl';

class Academic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        'Academic': [
          {
            'degree': 'Atomic Master',
            'description': ' I’m so hungry i’m so hungry but ew not for that pelt around the house and up and down stairs chasing phantoms',
            'endDate': 'Jan 2017',
            'institution': 'MIT',
            'startDate': 'Jan 2018',
          },
          {
            'degree': 'Space Engineering',
            'description': 'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
            'endDate': 'Decenber 2015',
            'institution': 'Harvard',
            'startDate': 'Jan 2017',
          },
          {
            'degree': 'Space Engineering',
            'description': 'Meow in empty rooms. Find empty spot in cupboard and sleep all day check cat door for ambush 10 times before coming in for hack. ',
            'endDate': 'Decenber 2015',
            'institution': 'Harvard',
            'startDate': 'Jan 2017',
          },
        ],
      },
    };
  }

  componentDidMount() {

    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(profile => this.setState({ profile }));
  }

  render() {
    return (
      <div className='Academic'>
        <h1 className='Academic-title'>Academico</h1>
        <div className='Academic-card'>
          {this.state.profile.Academic &&
          this.state.profile.Academic.length > 0 &&
          this.state.profile.Academic.map((item, index) => (
            <div className='Academic-item' key={index.toString()}>
              <h2>{item.degree}</h2>
              <h3>{item.institution}</h3>
              <p>{item.description}</p>
              <p>
                {item.startDate}
                {' '}
                -
                {item.endDate}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Academic;
