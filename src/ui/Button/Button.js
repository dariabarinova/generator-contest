import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.css';

const Button = ({ children, theme }) => (
  <button
    className={cx(
      'button', {
        [`button-theme--${theme}`]: theme,
      },
    )}
    type="button"
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(
      PropTypes.element.isRequired,
    ).isRequired,
  ]).isRequired,
  theme: PropTypes.string,
};

Button.defaultProps = {
  theme: 'default',
};

export default Button;
