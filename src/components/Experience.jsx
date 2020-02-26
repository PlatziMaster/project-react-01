import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div className="container-info">
          <div className="Experience-title title">EXPERIENCIA LABORAL</div>
          <div className="container-detail">
            {data &&
              data.map(item => {
                return (
                  <div className="Experience-item Card">
                    <span className="item_title">{item.jobTitle}</span>
                    <span className="item_company">{item.company}</span>
                    <span className="item_description">
                      {item.jobDescription}
                    </span>
                    <span className="item_date">{`${item.startDate} - ${item.endDate}`}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Experience;
