import React, { Component } from 'react';
import '../styles/components/Skills.styl';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        'skills': [
          {
            'name': 'HTML5',
            'percentage': '75%',
          },
          {
            'name': 'CSS',
            'percentage': '25%',
          },
          {
            'name': 'JavaScript',
            'percentage': '55%',
          },
          {
            'name': 'React',
            'percentage': '90%',
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
      <div className='Skills'>
        <h1 className='Skills-title'>Intereses</h1>
        <div className='Skills-card'>
          {this.state.profile.skills &&
          this.state.profile.skills.length > 0 &&
          this.state.profile.skills.map((item, index) => (
            <div className='Skills-item' key={index.toString()}>
              <h4>{item.name}</h4>
              <progress
                max='100'
                value={item.percentage.slice(0, -1)}
              />
              <small>
                {' '}
                {item.percentage}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skills;

