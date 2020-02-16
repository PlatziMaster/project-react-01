import React from 'react';
import '../styles/components/Languages.styl';

class Languages extends React.Component {
  render() {
    const { languages } = this.props;
    return (
      <div className='Languages'>
        <h1 className='Languages-title'>Idiomas</h1>
        <ul className='Languages-list'>
          {
            languages && languages.map(
              (item) => {
                return (
                  <li className='Languages-item' key={item.name}>{`${item.name} (${item.percentage})`}</li>
                );
              },
            )
          }
        </ul>
      </div>
    );
  }
}

export default Languages;
