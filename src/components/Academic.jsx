import React, { Component } from 'react';

class Academic extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div className="container-info col-7">
          <div className="Academic-title title">academia</div>
          <div className="container-detail">
            {data &&
              data.map(item => {
                return (
                  <div className="Academic-item Card">
                    <span className="item_title">{item.degree}</span>
                    <span className="item_company">{item.institution}</span>
                    <span className="item_description">{item.description}</span>
                    <span className="item_date">{`${item.endDate}-${item.startDate}`}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Academic;
