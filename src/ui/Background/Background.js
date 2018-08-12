import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './background.css';

const Background = ({ children, theme, fullScreen }) => (
  <div
    className={cx(
      'background',
      `background--${theme}`, {
        'background--fullScreen': fullScreen,
      },
    )}
  >
    {children}
  </div>
);

Background.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(
      PropTypes.element.isRequired,
    ).isRequired,
  ]).isRequired,
  theme: PropTypes.oneOf([
    'default',
    'black',
  ]),
  fullScreen: PropTypes.bool,
};

Background.defaultProps = {
  theme: 'default',
  fullScreen: false,
};

export default Background;
