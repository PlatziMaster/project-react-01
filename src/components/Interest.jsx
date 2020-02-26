import React, { Component } from 'react';

class Interest extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <div className="container-info col-6">
          <div className="Interest-title title ">intereses</div>
          {data &&
            data.map(item => {
              return <div className="Interest-item">{item}</div>;
            })}
        </div>
      </>
    );
  }
}
export default Interest;
