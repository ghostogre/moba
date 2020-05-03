import { combineReducers } from 'redux';
import article from './article';
import hero from './hero';
import ads from './ads';

export default combineReducers({
  article,
  ads,
  hero
});
