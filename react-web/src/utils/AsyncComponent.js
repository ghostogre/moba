import React, { Component } from 'react';

export default function AsyncComponent (importComponent) {
  class AsyncComponent extends Component {
    constructor (props) {
      super(props);
      this.state = {
        component: null
      };
    }
    componentDidMount () {
      importComponent().then((mod) => {
        this.setState({
          // 兼容ES6和CommonJS
          component: mod.default ? mod.default : mod
        });
      });
    }
    render() {
      const C = this.state.component;
      return (C ? <C {...this.props}></C> : null);
    }
  }
  return AsyncComponent;
}