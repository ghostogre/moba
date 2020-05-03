import { combineReducers } from 'redux';
import heroCategories from './heroCategories';
import artcileCategories from './articleCategories';
import articles from './articles';
import heroes from './heroes';
import ads from './ads';

export default combineReducers({
  articles,
  ads,
  heroes,
  heroCategories,
  artcileCategories
});
