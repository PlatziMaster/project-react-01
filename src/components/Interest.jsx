import React, { Component } from 'react';
import '../styles/components/Interest.styl';

class Interest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile:{
        'interest': [
          'javascript',
          'develop',
          'backend',
          'frontend',
        ],
      }
    };
  }

  componentDidMount() {

    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(profile => this.setState({ profile }));
  }

  render() {
    return (
      <div className='Interest'>
        <h1 className='Interest-title'>Intereses</h1>
        <div className='Interest-card'>
          <ul>
            {this.state.profile.interest &&
            this.state.profile.interest.length > 0 &&
            this.state.profile.interest.map((item, index) => (
              <li className='Interest-item' key={index.toString()}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Interest;

