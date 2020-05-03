import { combineReducers } from 'redux';
import hero from './hero';
import article from './article';
import home from './home';
import app from './app';
import entities from './entities';

export default combineReducers({
  home,
  app,
  hero,
  article,
  entities
});
