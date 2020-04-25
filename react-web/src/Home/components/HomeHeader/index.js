import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MLink from '../../../components/MLink';
import Logo from '../../../assets/logo.png'; // 只能导入图片

class HomeHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="topbar bg-black py-2 px-3 flex-row ai-center">
          <img src={Logo} height="30" alt="" />
          <div className="px-2 flex-1">
            <div className="text-white">本命英雄</div>
            <div className="text-grey-1 fs-xxs">快去查看你的本命英雄吧</div>
          </div>
          <MLink tag="button" to="/slot" className="btn bg-primary text-white">点击查看</MLink>
        </header>
        <div className="pt-3 pb-2 bg-primary">
          <div className="nav text-white pb-1 nav-inverse jc-around">
            <NavLink className="nav-item" activeClassName="active" to="/">首页</NavLink>
            <NavLink className="nav-item" activeClassName="active" to="/article">攻略中心</NavLink>
            <NavLink className="nav-item" activeClassName="active" to="/activity">荣耀抢金币</NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HomeHeader;