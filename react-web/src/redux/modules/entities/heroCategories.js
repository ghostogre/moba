import createReducer from '../../../utils/createReducer';
import { findNode } from '../../../utils/resolvePath';

// 名称常量
export const sublistName = 'heroes';
export const sublistPath = 'heroList';
export const subId = '_id';
// schema
export const schema = {
  id: '_id',
  name: 'heroCategories',
  // 可以使用path: xxx.xxx.xx，然后split('.')指定深层次路径
  sublistName,
  sublistPath,
  subId
};

// action types

// 异步actions

// 同步action creator

// 初始状态是{}, 直接在参数里赋默认值
// reducer
export default createReducer(schema.name);

// selectors
export const getHeroCategory = (state, id) => state.entities.heroCategories[id];
export const getAllHeroCategory = state => state.entities.heroCategories;
