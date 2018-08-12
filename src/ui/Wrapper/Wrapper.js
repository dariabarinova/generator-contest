import React from 'react';
import PropTypes from 'prop-types';
import './wrapper.css';

const MoreIdeas = ({ children }) => (
  <div className="wrapper-more-ideas">
    {children}
  </div>
);

MoreIdeas.propTypes = {
  children: PropTypes.element.isRequired,
};

const Description = ({ children }) => (
  <div className="wrapper-description">
    {children}
  </div>
);

Description.propTypes = {
  children: PropTypes.element.isRequired,
};

const Title = ({ children }) => (
  <div className="wrapper-title">
    {children}
  </div>
);

Title.propTypes = {
  children: PropTypes.element.isRequired,
};

const Robot = ({ children }) => (
  <div className="wrapper-robot">
    {children}
  </div>
);

Robot.propTypes = {
  children: PropTypes.element.isRequired,
};

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
  MoreIdeas,
  Description,
  Title,
  LikeRepost,
  Content,
  Robot,
};
