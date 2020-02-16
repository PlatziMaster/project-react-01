import React from 'react';
import '../styles/components/Skills.styl';

class Skills extends React.Component {
  render() {
    const { skills } = this.props;
    return (
      <div className='Skills'>
        <h1 className='Skills-title'>Skills</h1>
        <ul className='Skills-items-container'>
          {
            skills && skills.map(
              (item) => {
                return (
                  <li className='Skills-item' key={item.name}>{`${item.name} - ${item.percentage}`}</li>
                );
              },
            )
          }
        </ul>
      </div>
    );
  }
}

export default Skills;
