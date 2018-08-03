import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './popover.css';

const Popover = ({
  children,
  theme,
}) => (
  <div
    className={cx(
      'popover', {
        [`popover-theme--${theme}`]: theme,
      },
    )}
  >
    {children}
    <span className="popover-arrow" />
  </div>
);

Popover.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(
      PropTypes.element.isRequired,
    ).isRequired,
  ]).isRequired,
  theme: PropTypes.string,
};

Popover.defaultProps = {
  theme: 'default',
};

export default Popover;
