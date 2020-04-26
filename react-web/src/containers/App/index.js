import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AsyncComponent from '../../utils/AsyncComponent';
import './style.scss';
const Main = AsyncComponent(() => import('../Main'));
const Slot = AsyncComponent(() => import('../Slot'));
const Activity = AsyncComponent(() => import('../Activity'));

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/slot" component={Slot}></Route>
          <Route path="/activity" component={Activity}></Route>
          <Route path="/" component={Main}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
