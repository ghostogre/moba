import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/style.scss';
// import * as serviceWorker from './serviceWorker';
// React.StrictMode: StrictMode 不会渲染任何真实的UI。它为其后代元素触发额外的检查和警告。
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
