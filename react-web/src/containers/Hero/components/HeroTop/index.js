import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class HeroTop extends Component {
  render() {
    const { title, name, scores = {}, categories, banner } = this.props;
    return (
      <div className="top" style={{backgroundImage: `url(${banner})`}}>
        <div className="info text-white p-3 flex-column h-100 jc-end">
          <div className="fs-sm">{title}</div>
          <h2 className="my-2">{name}</h2>
          <div className="fs-sm">{categories.map(v => v.name).join('/')}</div>
          <div className="flex-row jc-between ai-center">
            {
              scores ? (
                <div className="scores flex-row ai-center pt-2">
                  <span>难度</span>
                  <span className="badge bg-primary">{scores.diffcult}</span>
                  <span>技能</span>
                  <span className="badge bg-blue-1">{scores.skills}</span>
                  <span>攻击</span>
                  <span className="badge bg-danger">{scores.attack}</span>
                  <span>生存</span>
                  <span className="badge bg-dark">{scores.survive}</span>
                </div>
              ) : null
            }
            <Link className="text-grey fs-sm" to="/">皮肤: 2 &gt;</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroTop;