import React, { Component } from 'react';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import AsyncComponent from '../utils/AsyncComponent';
import './style.scss';
import Logo from '../assets/logo.png'; // 只能导入图片
// 变量需要在import之后定义
const Home = AsyncComponent(() => import('../Home'));
const Hero = AsyncComponent(() => import('../Hero'));
const Article = AsyncComponent(() => import('../Article'));

class Main extends Component {
  render() {
    // console.log(this.props.match)
    return (
      <div>
        <header className="topbar bg-black py-2 px-3 flex-row ai-center">
          <img src={Logo} height="30" alt="" />
          <div className="px-2 flex-1">
            <div className="text-white">本命英雄</div>
            <div className="text-grey-1 fs-xxs">快去查看你的本命英雄吧</div>
          </div>
          <button className="btn bg-primary text-white" onClick={this.navigateToSlot}>点击查看</button>
        </header>
        <div className="pt-3 pb-2 bg-primary">
          <div className="nav text-white pb-1 nav-inverse jc-around">
            <NavLink className="nav-item" activeClassName="active" to="/">首页</NavLink>
            <NavLink className="nav-item" activeClassName="active" to="/article">攻略中心</NavLink>
            <NavLink className="nav-item" activeClassName="active" to="/activity">荣耀抢金币</NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/articles/:id" component={Article}></Route>
          <Route path="/hero/:id" component={Hero}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
  navigateToSlot = () => {
    this.props.history.push('/slot');
  }
}

export default withRouter(Main);