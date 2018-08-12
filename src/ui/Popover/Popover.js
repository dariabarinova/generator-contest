import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './popover.css';

const Popover = ({
  children,
  theme,
  visible,
  onMouseEnter,
  displayNone,
}) => (
  <div
    className={cx(
      'popover', {
        [`popover-theme--${theme}`]: theme,
        'popover--hidden': !visible,
        'popover--dn': displayNone,
      },
    )}
    onMouseEnter={onMouseEnter}
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
  visible: PropTypes.bool,
  displayNone: PropTypes.bool,
  onMouseEnter: PropTypes.func,
};

Popover.defaultProps = {
  theme: 'default',
  visible: false,
  displayNone: false,
  onMouseEnter: null,
};

export default Popover;
