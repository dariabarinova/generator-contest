import React from 'react';
import PropTypes from 'prop-types';
import './repostList.css';

const RepostListItem = ({ children }) => (
  <div className="repost-list-item">
    {children}
  </div>
);

const RepostList = ({ children }) => (
  <div className="repost-list">
    {children}
  </div>
);

RepostList.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.element.isRequired,
  ).isRequired,
};
RepostListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(
      PropTypes.element.isRequired,
    ).isRequired,
  ]).isRequired,
};

export {
  RepostListItem,
};

export default RepostList;
