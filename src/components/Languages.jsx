import React, { Component } from 'react';
import '../styles/components/Languages.styl';

class Languages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        'languages': [
          {
            'name': 'Spanish',
            'percentage': '90%',
          },
          {
            'name': 'English',
            'percentage': '80%',
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
      <div className='Languages'>
        <h1 className='Languages-title'>Languages</h1>
        <div className='Languages-card'>
          <ul>
            {this.state.profile.languages &&
            this.state.profile.languages.length > 0 &&
            this.state.profile.languages.map((item, index) => (
              <div className='Languages-item' key={index.toString()}>
                <h4>{item.name}</h4>
                <progress max='100' value={item.percentage.slice(0, -1)} />
                <small>
                  {' '}
                  {item.percentage}
                </small>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Languages;