import createReducer from '../../../utils/createReducer';
// schema
export const schema = {
  id: '_id',
  name: 'articles'
};

// action types

// 异步actions

// 同步action creator

// 初始状态是{}, 直接在参数里赋默认值
// reducer
export default createReducer(schema.name);

// selectors
// 用于和页面模块解耦
// 商品详情
export const getArticleInfo = (state, id) => state.entities.articles[id];
export const getAllArticles = state => state.entities.articles;
