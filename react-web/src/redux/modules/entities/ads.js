import createReducer from '../../../utils/createReducer';
// schema
export const schema = {
  id: '_id',
  name: 'ads'
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