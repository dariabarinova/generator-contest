import React from 'react';
import PropTypes from 'prop-types';
import './wrapper.css';

const LikeRepost = ({ children }) => (
  <div className="wrapper-like-repost">
    {children}
  </div>
);

LikeRepost.propTypes = {
  children: PropTypes.element.isRequired,
};

const Content = ({ children }) => (
  <div className="wrapper-content">
    {children}
  </div>
);

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(
      PropTypes.element.isRequired,
    ).isRequired,
  ]).isRequired,
};

export {
  LikeRepost,
  Content,
};
