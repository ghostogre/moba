import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MLink = (props) => {
  const { tag: Tag, className: _className, children, history, to, key } = props;
  return (<Tag key={key} className={_className} onClick={() => history.push(to)}>{children}</Tag>);
};

MLink.propTypes = {
  tag: PropTypes.string.isRequired
};

MLink.defaultProps = {
  tag: 'div',
  to: ''
};

export default withRouter(MLink);
