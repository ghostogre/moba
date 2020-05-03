import { createStore, applyMiddleware } from 'redux';
import apiMiddleware from './middlewares/api';
import rootReducer from './modules';
import thunk from 'redux-thunk';

let store;

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  store = createStore(rootReducer, composeEnchancer(applyMiddleware(thunk, apiMiddleware)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, apiMiddleware));
}

export default store;
