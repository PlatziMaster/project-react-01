import React from 'react';
import '../styles/components/Interest.styl';

class Interest extends React.Component {
  render() {
    const { interest } = this.props;
    return (
      <div className='Interest'>
        <h1 className='Interest-title'>Intereses</h1>
        <ul className='Interest-list'>
          {
            interest && interest.map(
              (item) => {
                return (
                  <li className='Interest-item' key={item}>{item}</li>
                );
              },
            )
          }
        </ul>
      </div>
    );
  }
}

export default Interest;
