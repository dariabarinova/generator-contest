import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './background.css';

const Background = ({ children, theme }) => (
  <div
    className={cx('background', `background--${theme}`)}
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
};

Background.defaultProps = {
  theme: 'default',
};

export default Background;
