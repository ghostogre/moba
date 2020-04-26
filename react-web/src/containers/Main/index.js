import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import AsyncComponent from '../../utils/AsyncComponent';
import HomeHeader from './components/HomeHeader';
import './style.scss';
// 变量需要在import之后定义
const Home = AsyncComponent(() => import('../Home'));
const Hero = AsyncComponent(() => import('../Hero'));
const Article = AsyncComponent(() => import('../Article'));

class Main extends Component {
  render() {
    return (
      <div>
        <HomeHeader></HomeHeader>
        <Router>
          <Switch>
            <Route path="/articles/:id" component={Article}></Route>
            <Route path="/hero/:id" component={Hero}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
