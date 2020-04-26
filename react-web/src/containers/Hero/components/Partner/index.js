import React, { Component } from 'react';
import './style.scss';

class Partner extends Component {
  render() {
    const { data } = this.props;
    return (
      <dl>
        <dt className="fs-xl">最佳搭档</dt>
        {
          data.map((item) => {
            return (
              <dd key={item._id} className="flex-row pt-3">
                <img src={item.hero.avatar} height="50" alt=""></img>
                <p className="flex-1 my-0 ml-3">{item.description}</p>
              </dd>
            );
          })
        }
      </dl>
    );
  }
}

export default Partner;
