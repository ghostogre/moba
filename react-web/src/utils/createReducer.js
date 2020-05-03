// entities reducer的模板创建工具函数
const createReducer = name => (state = {}, action) => {
  if (action.response && action.response[name]) {
    return {
      ...state,
      ...action.response[name]
    };
  } else {
    return state;
  }
}

export default createReducer;
