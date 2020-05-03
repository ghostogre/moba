import articleSchema, { getArticleInfo } from './entities/article';
import { FETCH_DATA, methodTypes } from '../middlewares/api';
import url from '../../utils/url';
// action types
export const types = {
  FETCH_ARTICLE_REQUEST: 'FETCH_ARTICLE_REQUEST',
  FETCH_ARTICLE_SUCCESS: 'FETCH_ARTICLE_SUCCESS',
  FETCH_ARTICLE_FAILURE: 'FETCH_ARTICLE_FAILURE'
};

// 异步actions
export const actions = {
  loadArticleInfo: id => (dispatch, getState) => {
    const endpoint = url.getArticle(id);
    const article = getArticleInfo(getState(), id);
    if (article) { // 缓存结果，假如文章内容不会修改的话
      return dispatch(fetchArticleSuccess(id));
    }
    return dispatch(fetchArticle(endpoint));
  }
}

// action creator
const fetchArticle = (endpoint /** , params */) => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_ARTICLE_REQUEST,
      types.FETCH_ARTICLE_SUCCESS,
      types.FETCH_ARTICLE_FAILURE
    ],
    method: methodTypes.GET,
    endpoint,
    schema: articleSchema
  }
});

// 假如返回缓存的话，直接发送success action
const fetchArticleSuccess = id => ({
  type: types.FETCH_ARTICLE_SUCCESS,
  id
});

// 初始状态
const initialState = {
  isFetching: false,
  id: null // 只保存id，然后去获取
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ARTICLE_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        id: action.id
      };
    case types.FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        id: null
      };
    default:
      return state;
  }
}

export default reducer;

// selectors
export const getArticleById = (state, id) => getArticleInfo(state, id);
