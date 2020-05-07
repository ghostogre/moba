import axios from '../../utils/http';
import { findNode, replaceNode } from '../../utils/resolvePath';

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
export const normalizeData = (data, schema) => {
  const { id, name, sublistName } = schema;
  const kvObj = {};
  const ids = [];
  if (sublistName) { // 分类下面的列表
    const { sublistPath, subId } = schema;
    const catObj = {};
    data.forEach(item => {
      const key = item[id];
      let sublist = findNode(item, sublistPath);
      const catIds = sublist.map(n => {
        catObj[n[subId]] = n;
        return n[subId];
      });
      replaceNode(item, sublistPath, catIds);
      kvObj[key] = item;
      ids.push(key);
    });
    return {
      [name]: kvObj,
      [sublistName]: catObj,
      ids
    };
  } else if (Array.isArray(data)) { // 普通列表
    data.map(item => {
      kvObj[item[id]] = item;
      ids.push(item[id]);
    });
    return {
      [name]: kvObj,
      ids
    };
  } else if (Object.prototype.toString.call(data) === '[object Object]') { // 返回对象
    // 获取详情
    kvObj[data[id]] = data;
    ids.push(data[id]);
    // 对象传ids是为了防止类似首页广告这种情况，无法从url获取id的情况
    // 有的详情接口不需要传参
    return {
      [name]: kvObj,
      ids
    };
  } else {
    // 为了兼容没有返回的情况
    return {
      ids
    };
  }
};
