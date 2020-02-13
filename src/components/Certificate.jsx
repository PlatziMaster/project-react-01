import React, { Component } from 'react';
import '../styles/components/Certificate.styl';

class Certificate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        'certificate': [
          {
            'date': 'Jan 2021',
            'description': 'Hack up furballs try to jump onto window and fall while scratching at wall. ',
            'institution': 'Platzi',
            'name': 'FrontEnd Developer',
          },
          {
            'date': 'Jan 2021',
            'description': 'Scratch at the door then walk away wack the mini furry mouse',
            'institution': 'Platzi',
            'name': 'Backend Developer',
          },
          {
            'date': 'Jan 2021',
            'description': 'Scratch at the door then walk away wack the mini furry mouse',
            'institution': 'Platzi',
            'name': 'Backend Developer',
          },
          {
            'date': 'Jan 2021',
            'description': 'Scratch at the door then walk away wack the mini furry mouse',
            'institution': 'Platzi',
            'name': 'Backend Developer',
          },
          {
            'date': 'Jan 2021',
            'description': 'Scratch at the door then walk away wack the mini furry mouse',
            'institution': 'Platzi',
            'name': 'Backend Developer',
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
      <div className='Certificate'>
        <h1 className='Certificate-title'>Certificados</h1>
        <div className='Certificate-card'>
          {this.state.profile.certificate &&
          this.state.profile.certificate.length > 0 &&
          this.state.profile.certificate.map((item, index) => (
            <div className='Certificate-item' key={index.toString()}>
              <h2>{item.name}</h2>
              <h3>{item.institution}</h3>
              <p>{item.description}</p>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Certificate;

