// 处理路径
export const splitPath = path => path.split('.');

// 查找对象节点
export const findNode = (obj, path) => {
  let node = obj;
  splitPath(path).forEach(_path => {
    node = node[_path];
  });
  return node;
}

// 替换对象节点
export const replaceNode = (obj, path, newVal) => {
  let paths = splitPath(path), len = paths.length, node = obj;
  for (let i = 0; i < len - 1; i++) {
    node = node[paths[i]];
  }
  node[paths[len - 1]] = newVal;
}
