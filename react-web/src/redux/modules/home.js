import { combineReducers } from 'redux';
import url from '../../utils/url';
import { methodTypes, FETCH_DATA } from '../middlewares/api';
import { getHero, getAllHeroes } from './entities/heroes';
import { replaceNode, findNode } from '../../utils/resolvePath';
import { schema as adsSchema, getAdsById } from './entities/ads';
import { schema as heroCatgorySchema, getHeroCategory, sublistPath as heroListPath, getAllHeroCategory } from './entities/heroCategories';
import { schema as articleSchema, getArticleCategory, sublistPath as articleListPath, getAllArticleCategory } from './entities/articleCategories';
import _ from 'loadsh';
import { getArticleInfo, getAllArticles } from './entities/articles';
import { createSelector } from 'reselect';
// action types
export const types = {
  // 获取英雄列表
  FETCH_HEROES_REQUEST: 'HOME/FETCH_HEROES_REQUEST',
  FETCH_HEROES_SUCCESS: 'HOME/FETCH_HEROES_SUCCESS',
  FETCH_HEROES_FAILURE: 'HOME/FETCH_HEROES_FAILURE',
  // 获取新闻列表
  FETCH_NEWS_REQUEST: 'HOME/FETCH_NEWS_REQUEST',
  FETCH_NEWS_SUCCESS: 'HOME/FETCH_NEWS_SUCCESS',
  FETCH_NEWS_FAILURE: 'HOME/FETCH_NEWS_FAILURE',
  // 获取广告列表
  FETCH_ADS_REQUEST: 'HOME/FETCH_ADS_REQUEST',
  FETCH_ADS_SUCCESS: 'HOME/FETCH_ADS_SUCCESS',
  FETCH_ADS_FAILURE: 'HOME/FETCH_ADS_FAILURE'
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
  },
  loadHomeAds: () => (dispatch, getState) => {
    const endpoint = url.getAdsHome();
    return dispatch(fetchAds(endpoint));
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
    schema: heroCatgorySchema
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
});

const fetchAds = (endpoint) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_ADS_REQUEST,
      types.FETCH_ADS_SUCCESS,
      types.FETCH_ADS_FAILURE
    ],
    endpoint,
    method: methodTypes.GET,
    schema: adsSchema
  }
});

// 初始状态
const initialState = {
  heroes: {
    isFetching: false,
    ids: []
  },
  articles: {
    isFetching: false,
    ids: []
  },
  ads: {
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
        ids: action.response.ids
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
        ids: action.response.ids
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

const ads = (state = initialState.ads, action) => {
  switch (action.type) {
    case types.FETCH_ADS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_ADS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ids: action.response.ids
      };
    case types.FETCH_ADS_FAILURE:
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
  articles,
  ads
});

// selectors
// 首页英雄列表
// export const getHeroes = state => {
//   const cats = state.home.heroes.ids.map(id => {
//     const cat = _.cloneDeep(getHeroCategory(state, id));
//     const heroList = findNode(cat, heroListPath).map(subId => {
//       return getHero(state, subId)
//     });
//     replaceNode(cat, heroListPath, heroList);
//     return cat;
//   });
//   return cats;
// };

// 首页文章列表
// export const getArticles = state => {
//   const cats = state.home.articles.ids.map(id => {
//     const cat = _.cloneDeep(getArticleCategory(state, id));
//     const newsList = findNode(cat, articleListPath).map(subId => {
//       return getArticleInfo(state, subId)
//     });
//     replaceNode(cat, articleListPath, newsList);
//     return cat;
//   });
//   return cats;
// };

const getArticleIds = state => state.home.articles.ids;

export const getArticles = createSelector(
  [getArticleIds, getAllArticles, getAllArticleCategory],
  (articleIds, articles, articleCategories) => {
    const cats = articleIds.map(id => {
      const cat = _.cloneDeep(articleCategories[id]);
      const newsList = findNode(cat, articleListPath).map(subId => articles[subId]);
      replaceNode(cat, articleListPath, newsList);
      return cat;
    })
    return cats;
  }
);

const getHeroIds = state => state.home.heroes.ids;

export const getHeroes = createSelector(
  [getHeroIds, getAllHeroes, getAllHeroCategory],
  (heroIds, heroes, heroCategories) => {
    const cats = heroIds.map(id => {
      const cat = _.cloneDeep(heroCategories[id]);
      const heroList = findNode(cat, heroListPath).map(subId => heroes[subId]);
      replaceNode(cat, heroListPath, heroList);
      return cat;
    })
    return cats;
  }
);

// 首页广告列表
export const getAds = state => state.home.ads.ids.map(id => getAdsById(state, id));
