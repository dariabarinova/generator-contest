import React from 'react';
import PropTypes from 'prop-types';
import './blackBox.css';

const BlackBox = ({ children }) => (
  <div className="black-box">
    {children}
  </div>
);

BlackBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(
      PropTypes.element.isRequired,
    ).isRequired,
  ]).isRequired,
};

export default BlackBox;
