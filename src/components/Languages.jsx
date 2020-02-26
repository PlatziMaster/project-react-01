import React, { Component } from 'react';

class Languages extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div className="container-info col-6">
          <div className="Languages-title title">idiomas</div>
          {data &&
            data.map(item => {
              return (
                <div className="Languages-item">
                  <span className="item_title">{item.name}</span>
                  <div>
                    <progress value={item.percentage} max="100"></progress>
                    <span className="item_description">{` ${item.percentage}%`}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}

export default Languages;
