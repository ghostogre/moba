import { combineReducers } from 'redux';
import heroCategories from './heroCategories';
import articleCategories from './articleCategories';
import articles from './articles';
import heroes from './heroes';
import ads from './ads';

export default combineReducers({
  articles,
  ads,
  heroes,
  heroCategories,
  articleCategories
});
