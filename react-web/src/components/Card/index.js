import React from 'react';
import PropTypes from 'prop-types';

// 首页卡片
function Card (props) {
  const { title, icon, plain } = props;
  return (
    <div className="card p-3 bg-white mt-3">
      <div className={`card-header flex-row ai-center ${!plain ? 'pb-3 border-bottom' : ''}`}>
        <i className={`sprite sprite-${icon}`}></i>
        <strong className='fs-xl flex-1 px-2'>{title}</strong>
        {!plain ? (<i className="sprite sprite-more"></i>): null}
      </div>
      <div className="card-body pt-3">
        {props.children}
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  plain: PropTypes.bool
}

Card.defaultProps = {
  title: '',
  icon: '',
  plain: false
}

export default Card;