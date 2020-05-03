import createReducer from '../../../utils/createReducer';
// schema
export const schema = {
  id: '_id',
  name: 'heroCategories',
  // 可以使用path: xxx.xxx.xx，然后split('.')指定深层次路径
  catName: 'heroes',
  catPath: 'heroList'
};

// action types
const types = {
};

// 异步actions
const actions = {
};

// 同步action creator

// 初始状态是{}, 直接在参数里赋默认值
// reducer
export default createReducer(schema.name);

// selectors
