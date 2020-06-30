import React, { Component } from 'react';
import '../styles/components/Experience.styl';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: {
        "experience": [
          {
            "company": "PugStar",
            "endDate": "Present",
            "jobDescription": "scratch the furniture. Good now the other hand, too lay on arms while you're using the keyboard.",
            "jobTitle": "Frontend",
            "startDate": "Jan 2020"
          },
          {
            "company": "CatStore",
            "endDate": "Jan 2016",
            "jobDescription": "Meow in empty rooms lick left leg for ninety minutes, still dirty.",
            "jobTitle": "Backend",
            "startDate": "Sept 2019"
          },
          {
            "company": "CatStore",
            "endDate": "Jan 2016",
            "jobDescription": "Meow in empty rooms lick left leg for ninety minutes, still dirty.",
            "jobTitle": "Backend",
            "startDate": "Sept 2019"
          }
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
      <div className="Experience">
        <h1 className="Experience-title">Experiencia</h1>
        <div className="Experience-card">
          {this.state.profile.experience &&
            this.state.profile.experience.length > 0 &&
            this.state.profile.experience.map((item, index) => (
              <div className="Experience-item" key={index.toString()}>
                <h2>{item.company}</h2>
                <h3>{item.jobTitle}</h3>
                <p>{item.jobDescription}</p>
                <p>
                  {item.startDate} - {item.endDate}
                </p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Experience;

