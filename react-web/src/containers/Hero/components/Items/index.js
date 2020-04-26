import React, { Component } from 'react';
import './style.scss';

class Items extends Component {
  render() {
    const { items1, items2 } = this.props;
    return (
      <div className="skills">
        <div className="fs-xl">顺风出装</div>
        <div className="flex-row jc-around text-center mt-3">
          {
            items1.map(item => {
              return (
                <div key={item.name} >
                  <img className="icon" src={item.icon} alt=""/>
                  <div className="fs-xs">{item.name}</div>
                </div>
              )
            })
          }
        </div>
        <div className="border-bottom mt-3"></div>
          <div className="fs-xl mt-3">逆风出装</div>
            <div className="flex-row jc-around text-center mt-3">
            {
              items2.map(item => {
                return (
                  <div key={item.name} >
                    <img className="icon" src={item.icon} alt=""/>
                    <div className="fs-xs">{item.name}</div>
                  </div>
                )
              })
            }
          </div>
      </div>
    );
  }
}

export default Items;