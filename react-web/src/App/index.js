import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AsyncComponent from '../utils/AsyncComponent';
import './style.scss';
const Main = AsyncComponent(() => import('../Main'));

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Main}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
