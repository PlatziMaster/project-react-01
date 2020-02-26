import React, { Component } from 'react';

class Skills extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div className="container-info col-5">
          <div className="Skills-title title">skills</div>
          <div className="skills_container">
            {data &&
              data.map(item => {
                return (
                  <div className="Skills-item">
                    <span className="item_title">{item.name}</span>
                    <div>
                      <progress value={item.percentage} max="100"></progress>
                      <span className="item_description">{` ${item.percentage}%`}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Skills;
