import React from 'react';
import './style.scss';

// 没有自己的state，使用函数式组件
const Category = function (props) {
  const { data } = props;
  return (
    <div className="nav-icons bg-white mt-3 text-center pt-3 text-grey-1">
      <ul className="flex-row flex-wrap ai-center">
        {
          data.map((item, index) => {
            return (
              <li key={index} className="nav-item mb-3">
                <i className={`sprite sprite-${item.iconName}`}></i>
                <div className="py-2">{item.title}</div>
              </li>
            )
          })
        }
      </ul>
      <div className="bg-light py-2 fs-sm">
        <i className="sprite sprite-around mr-1"></i>
        <span>收起</span>
      </div>
    </div>
  );
}

export default Category;
