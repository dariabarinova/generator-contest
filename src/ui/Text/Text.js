import React from 'react';
import PropTypes from 'prop-types';

import './text.css';

const Text = ({ children }) => (
  <span className="text">
    {children}
  </span>
);

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Text;
