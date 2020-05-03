import { combineReducers } from 'redux';
import url from '../../utils/url';
import { methodTypes, FETCH_DATA } from '../middlewares/api';
import { schema as heroSchema } from './entities/heroes';
import { schema as articleSchema } from './entities/articles';
// action types
export const types = {
  // 获取英雄列表
  FETCH_HEROES_REQUEST: 'HOME/FETCH_HEROES_REQUEST',
  FETCH_HEROES_SUCCESS: 'HOME/FETCH_HEROES_SUCCESS',
  FETCH_HEROES_FAILURE: 'HOME/FETCH_HEROES_FAILURE',
  // 获取新闻列表
  FETCH_NEWS_REQUEST: 'HOME/FETCH_NEWS_REQUEST',
  FETCH_NEWS_SUCCESS: 'HOME/FETCH_NEWS_SUCCESS',
  FETCH_NEWS_FAILURE: 'HOME/FETCH_NEWS_FAILURE'
};

// 异步actions
export const actions = {
  loadHeroList: () => (dispatch, getState) => {
    const endpoint = url.getHeroList();
    return dispatch(fetchHeroes(endpoint));
  },
  loadArticleList: () => (dispatch, getState) => {
    const endpoint = url.getNewsList();
    return dispatch(fetchArticles(endpoint));
  }
}

// action creator
const fetchHeroes = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_HEROES_REQUEST,
      types.FETCH_HEROES_SUCCESS,
      types.FETCH_HEROES_FAILURE
    ],
    endpoint,
    method: methodTypes.GET,
    schema: heroSchema
  }
});

const fetchArticles = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_NEWS_REQUEST,
      types.FETCH_NEWS_SUCCESS,
      types.FETCH_HEROES_FAILURE
    ],
    endpoint,
    method: methodTypes.GET,
    schema: articleSchema
  }
})

// 初始状态
const initialState = {
  heroes: {
    isFetching: false,
    ids: []
  },
  articles: {
    isFetching: false,
    ids: []
  }
};

// reducer
const heroes = (state = initialState.heroes, action) => {
  switch (action.type) {
    case types.FETCH_HEROES_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_HEROES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ids: state.ids.concat(action.response.ids)
      };
    case types.FETCH_HEROES_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

const articles = (state = initialState.articles, action) => {
  switch (action.type) {
    case types.FETCH_NEWS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ids: state.ids.concat(action.response.ids)
      };
    case types.FETCH_NEWS_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}

export default combineReducers({
  heroes,
  articles
});

// selectors
// 首页英雄列表
export const getHeroes = state => state.home.heroes.ids.map(id => state.entities.heroes[id]);
// 首页文章列表
export const getArticles = state => state.home.articles.ids.map(id => state.entities.articles[id]);
