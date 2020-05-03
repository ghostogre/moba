import axios from '../../utils/http';
export const FETCH_DATA = 'FETCH DATA';
// 请求方式
export const methodTypes = {
  GET: 'GET',
  POST: 'POST'
}

// methods
const methods = {
  [methodTypes.GET]: (url) => axios.get(url),
  [methodTypes.POST]: (url, data) => axios.post(url, data)
};

export default store => next => action => {
  const api = action[FETCH_DATA];
  if (typeof api === 'undefined') {
    return next(action);
  }
  const { endpoint, schema, types, method } = api;
  if (typeof endpoint !== 'string') {
    throw new Error('endpoint必须是字符串');
  }
  if (!schema) {
    throw new Error('缺少schema');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('types必须为长度为3的数组');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('每个action type必须为字符串类型');
  }
  
  const [requestType, successType, failureType] = types;

  const actionWith = data => {
    const finalAction = { ...action, ...data };
    delete finalAction[FETCH_DATA];
    return finalAction;
  }; // 传递action附带的其他属性

  next(actionWith({ type: requestType }));
  // 该middleware在thunk后面调用
  return fetchData(method, endpoint, schema).then(response => next(actionWith({
    type: successType,
    response
  })), error => next(actionWith({
    type: failureType,
    error: error.message || '获取数据失败'
  })));
};

// 兼容get，post请求
const fetchData = (method, endpoint, schema, params) => methods[method](endpoint, params)
  .then(data => normalizeData(data, schema));

// duck化数据
const normalizeData = (data, schema) => {
  const { id, name } = schema;
  const kvObj = {};
  const ids = [];
  if (Array.isArray(data)) {
    data.map(item => {
      kvObj[item[id]] = item;
      ids = item[id];
    });
  } else {
    // 获取详情
    kvObj[data[id]] = data;
    ids.push(data[id]);
  }
  return {
    [name]: kvObj,
    ids
  };
};
